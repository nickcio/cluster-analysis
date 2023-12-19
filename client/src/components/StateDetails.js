import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import EnsembleList from './EnsembleList';
import Map from './Map';
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EnsembleAssociationChart from './EnsembleAssociationChart';
import EnsembleAssociationTable from './EnsembleAssociationTable';
import AZDistricts from "./geojson/AZDistricts.json";
import SCDistricts from "./geojson/SCDistricts.json";
import TXDistricts from "./geojson/TXDistricts.json";


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
  }, [stateId]);


  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const structuredEnsembles = ensembles.map((currentEnsemble, index) => ({
    id: index + 1, 
    backendId: currentEnsemble._id,
    dem_votes_percent: currentEnsemble.average_dem_votes_percent,
    demographic_percent: currentEnsemble.average_demographic_percent,
    hamming_distance: currentEnsemble.average_hamming_distance,
    margin_of_victory: currentEnsemble.average_margin_of_victory, 
    opportunity_districts: currentEnsemble.average_opportunity_districts,
    optimal_transport_distance: currentEnsemble.average_optimal_transport_distance,
    population_margin: currentEnsemble.average_population_margin,
    rep_dem_split: currentEnsemble.average_rep_dem_split,
    average_rep_votes_percent: currentEnsemble.average_rep_votes_percent, 
    avg_euclidean_distance: currentEnsemble.avg_euclidean_distance,
    num_clusters: currentEnsemble.num_clusters,
    num_district_plans: currentEnsemble.num_district_plans,
    optimal_transport_matrix: currentEnsemble.optimal_transport_distance_matrix,
    hamming_distance_matrix: currentEnsemble.hamming_distance_matrix,
  }))


  return (
    <Box sx={{display: "flex", flexDirection: "row"}} style={{height: "93vh", width: "100vw"}}>
      <Box sx={{width:'50%'}}>
        <Map geoJsonName="Arizona" />
      </Box>
        <Box sx={{ display: "flex", flexDirection: "column", height: "93vh", width: "100vw"}}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="simple tabs example">
          <Tab label="Ensemble List" {...a11yProps(0)} />
          <Tab label="Ensemble Association" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <EnsembleList stateId={stateId} ensembles={structuredEnsembles}/>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
           Ensemble Association
           <EnsembleAssociationChart ensembles={structuredEnsembles}></EnsembleAssociationChart>
           <EnsembleAssociationTable ensembles={structuredEnsembles}></EnsembleAssociationTable>
        </TabPanel>
      </Box>
      </Box>
  );
};

export default StateDetails;
