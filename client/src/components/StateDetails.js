import React from 'react';
import { useParams } from 'react-router-dom';
import EnsembleList from './EnsembleList'; // Your ensemble list component
import Map from './Map';
import Box from "@mui/material/Box";


const StateDetails = () => {
  let { stateId } = useParams();

  return (
    <Box sx={{display: "flex", flexDirection: "row"}} style={{height: "93vh", width: "100vw"}}>
      <Box>
        <Map></Map>
      </Box>
      <EnsembleList stateId={stateId} />
      </Box>
  );
};

export default StateDetails;
