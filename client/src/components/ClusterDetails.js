import React, { useState } from 'react';
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

const ClusterDetails = () => {
  let { stateId, ensembleId, clusterId } = useParams();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const districtPlans = [
    {"id":1, "District Plan": 1, "Voting Age Pop.": 78317223, "African-American Pop.": 2387393, "Size (km2)": 62951, "Pop. Density": 1594.998, "Avg. Income USD": 79056, "Availabity": 0},
    {"id":2, "District Plan": 2, "Voting Age Pop.": 5469481, "African-American Pop.": 5279532, "Size (km2)": 21555, "Pop. Density": 325.315, "Avg. Income USD": 111880, "Availabity": 1},
    {"id":3, "District Plan": 3, "Voting Age Pop.": 74740961, "African-American Pop.": 76336206, "Size (km2)": 104516, "Pop. Density": 916.814, "Avg. Income USD": 58842, "Availabity": 0},
    {"id":4, "District Plan": 4, "Voting Age Pop.": 19618727, "African-American Pop.": 16543361, "Size (km2)": 33871, "Pop. Density": 742.588, "Avg. Income USD": 131819, "Availabity": 1},
    {"id":5, "District Plan": 6, "Voting Age Pop.": 41698633, "African-American Pop.": 39806902, "Size (km2)": 67370, "Pop. Density": 793.525, "Avg. Income USD": 147226, "Availabity": 1},
    {"id":6, "District Plan": 8, "Voting Age Pop.": 44009721, "African-American Pop.": 55530893, "Size (km2)": 32225, "Pop. Density": 1750.899, "Avg. Income USD": 52876, "Availabity": 0},
    {"id":7, "District Plan": 9, "Voting Age Pop.": 35177551, "African-American Pop.": 23018619, "Size (km2)": 86507, "Pop. Density": 521.338, "Avg. Income USD": 61892, "Availabity": 1},
    {"id":8, "District Plan": 10, "Voting Age Pop.": 77059908, "African-American Pop.": 22554393, "Size (km2)": 24056, "Pop. Density": 4106.865, "Avg. Income USD": 56336, "Availabity": 0},
    {"id":9, "District Plan": 11, "Voting Age Pop.": 42253654, "African-American Pop.": 35580932, "Size (km2)": 59507, "Pop. Density": 910.336, "Avg. Income USD": 67670, "Availabity": 0},
    {"id":10, "District Plan": 12, "Voting Age Pop.": 24168073, "African-American Pop.": 18742043, "Size (km2)": 86999, "Pop. Density": 356.15, "Avg. Income USD": 107619, "Availabity": 0},
    {"id":11, "District Plan": 13, "Voting Age Pop.": 38453277, "African-American Pop.": 379518, "Size (km2)": 7700, "Pop. Density": 6402.477, "Avg. Income USD": 54782, "Availabity": 0},
    {"id":12, "District Plan": 14, "Voting Age Pop.": 37496640, "African-American Pop.": 28794421, "Size (km2)": 82147, "Pop. Density": 585.202, "Avg. Income USD": 121892, "Availabity": 0},
    {"id":13, "District Plan": 15, "Voting Age Pop.": 31878110, "African-American Pop.": 31223051, "Size (km2)": 87032, "Pop. Density": 469.59, "Avg. Income USD": 117106, "Availabity": 0}
    ];
    

    return (
      <Box sx={{ display: "flex", flexDirection: "column", height: "93vh", width: "100vw" }}>
        <Box sx={{ flex: '1 1 auto' }}>
          <Map />
        </Box>
        <Typography variant="h7" component="h5" gutterBottom sx={{ width: "100%", position:'fixed', left:'22%', margin: 2 }}>
          Cluster {clusterId} Details
        </Typography>
        <Box sx={{ flex: '1 1 auto' }}>
          <DistrictPlansChart data={districtPlans} />
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <DistrictPlansTable data={districtPlans} />
        </Box>
        <Box sx={{display: "flex",  position:'fixed', top:'93%', left: '67%', justifyContent: "space-around"}}>
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
        </Box>
      </Box>
    );
};

export default ClusterDetails;
