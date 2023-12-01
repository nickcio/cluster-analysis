import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Map from './Map';
import {Box, Typography, Button} from "@mui/material";
import DistrictPlansChart from './DistrictPlansChart';
import DistrictPlansTable from './DistrictPlansTable';
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
    fetch('http://localhost:8080/retrievePlans?state=' + stateId + '&ensemble_id=' + ensembleId+ '&cluster_id=' + clusterId)
      .then(response => response.json())
      .then(data => {
        setPlans(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);


  console.log(districtPlans);
 
  const simplifiedDistrictPlans = districtPlans.map((plan, index) => ({
    id: index,
    area_data: plan.total_area,
    availability: plan.availability,
    dem_percentages: plan.dem_percentages,
    african_american_pop: plan.population_data["population aa"],
    white_population: plan.population_data["population white"],
    hispanic_population: plan.population_data["population hispanic"],
    rep_percentages: plan.rep_percentages,
  }));


    return (
      <Box sx={{ display: "flex", flexDirection: "column", height: "93vh", width: "100vw" }}>
        <Box sx={{ flex: '1 1 auto' }}>
          <Map/>
        </Box>
        <Typography variant="h7" component="h5" gutterBottom sx={{ width: "100%", position:'fixed', left:'22%', margin: 2 }}>
          Cluster {clusterId} Details
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