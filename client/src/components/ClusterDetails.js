import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Map from './Map';
import {Box, Typography, Button} from "@mui/material";
import DistrictPlansChart from './DistrictPlansChart';
import DistrictPlansTable from './DistrictPlansTable';
import MdsDisplay from './MDSDisplay';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


const ClusterDetails = () => {
  let { stateId, ensembleId, clusterId } = useParams();
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(''); 
  const [districtPlans, setPlans] = useState([]);

  const handleChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch('http://localhost:8080/retrievePlans?state=' + stateId + '&cluster_id=' + clusterId)
      .then(response => response.json())
      .then(data => {
        setPlans(data);
      })
      .catch(error => console.error('Error:', error));

    var leafletContainers = document.querySelectorAll('.leaflet-container');
    leafletContainers.forEach(function(container) {
      console.log(container);
      container.style.height = '45vh';
    });
  }, []);

  console.log(districtPlans);
  const calculateAverage = (data) => {
    if (Array.isArray(data)) {
      const sum = data.reduce((acc, value) => acc + value, 0);
      return sum / data.length;
    } 
    else if (typeof data === 'object' && data !== null) {
      const values = Object.values(data);
      const sum = values.reduce((acc, value) => acc + value, 0);
      return sum / values.length;
    }
    return data;
  };

  const form_district_table = (data) => {
    console.log("From district table", data);
    let return_district_plans = [];
    for(let i = 0; i <  Object.keys(data.area_data).length; i++){
      const obj = {
        id : i + 1,
        area_data: data.area_data[i],
        dem_percentages: data.dem_percentages[i],
        district_winner: data.district_winners[i][0] + "," + data.district_winners[i][1],
        rep_percentages: data.rep_percentages[i],
        opportunity_districts: data.opportunity_districts.includes(i + 1),
        pop_white: data.population_data.pop_white[i],
        pop_asian: data.population_data.pop_asian[i],
        pop_black: data.population_data.pop_black[i],
        pop_hisp: data.population_data.pop_hisp[i],
        pop_other: data.population_data.pop_other[i],
        geojson_id: data.geojson_id,
      };
      return_district_plans.push(obj);
    }
    console.log("return district", return_district_plans);
    return return_district_plans;
  }

  
  const simplifiedDistrictPlans = districtPlans.map((plan, index) => ({
    id: index + 1,
    availability: plan.geojson_id && plan.geojson_id !== '0',
    area_data: calculateAverage(plan.area_data),
    dem_percentages: calculateAverage(plan.dem_percentages),
    rep_percentages: calculateAverage(plan.rep_percentages),
    rep_dem_splits: plan.rep_dem_splits["Democratic"] + "," + plan.rep_dem_splits["Republican"],
    district_object: form_district_table(plan),
    geojson_id: plan.geojson_id,
  }));

  let mds = [];
  for(let i = 0; i < districtPlans.length; i++){
      mds.push(districtPlans[i].mds_centroid);
  }

    return (
      <Box sx={{display: "flex", flexDirection: "row"}} style={{height: "93vh", width: "100vw"}}>
        <Box sx={{padding:2}}>
          <Map/>
          <MdsDisplay clusterData={mds}></MdsDisplay>
        </Box>
        <Typography variant="h7" component="h5" gutterBottom sx={{ width: "100%", position:'fixed', left:'22%', margin: 2 }}>
          Cluster {clusterId[0]} Details
        </Typography>
        <Box sx={{ flex: '1 1 auto' }}>
          <DistrictPlansChart data={simplifiedDistrictPlans} />
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <DistrictPlansTable data={simplifiedDistrictPlans} />
        </Box>
      </Box>
    );
};

export default ClusterDetails;


/**
 * <Box sx={{display: "flex",  position:'fixed', top:'93%', left: '67%', justifyContent: "space-around"}}>
          <Button variant="outlined"
            onClick={handleClickOpen}
            sx={{
              color: 'black', 
              borderColor: 'blue', 
              backgroundColor: 'white',
              '&:hover': {
                borderColor: 'blue', 
                backgroundColor: 'lightgray'
              }
            }}>More Analysis Options</Button>
             <Dialog open={open} onClose={handleClose}>
              <DialogTitle>{"PLANSSS ANALYSIS"}</DialogTitle>
              <DialogContent sx={{width:'1100px', height:'80vh'}}>
                <List component="nav" aria-label="ensemble options" sx={{ width: '100%' }}>
                        <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <ListItemText primary="HI" />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <ListItemText primary="HI2" />
                        </ListItem>
                        <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <ListItemText primary="H3" />
                        </ListItem>
                  </List>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
 */