import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import EnsembleList from './EnsembleList';
import Map from './Map';
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EnsembleAssociationChart from './EnsembleAssociationChart';
import EnsembleAssociationTable from './EnsembleAssociationTable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StateDetails = () => {
  let {stateId} = useParams();
  const [ensembles, setEnsembles] = useState([]);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8080/retrieveEnsembles?state=' + stateId)
      .then(response => response.json())
      .then(data => {
        setEnsembles(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{display: "flex", flexDirection: "row"}} style={{height: "93vh", width: "100vw"}}>
      <Box>
        <Map></Map>
      </Box>
        <Box sx={{ display: "flex", flexDirection: "column", height: "93vh", width: "100vw" }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="simple tabs example">
          <Tab label="Ensemble List" {...a11yProps(0)} />
          <Tab label="Ensemble Association" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <EnsembleList stateId={stateId} ensembles={ensembles}/>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
           Ensemble Association
           <EnsembleAssociationChart ensembles={ensembles}></EnsembleAssociationChart>
           <EnsembleAssociationTable ensembles={ensembles}></EnsembleAssociationTable>
        </TabPanel>
      </Box>
      </Box>
  );
};

export default StateDetails;
