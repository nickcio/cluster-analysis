import React from 'react';
import { useParams } from 'react-router-dom';
import Map from './Map';
import Box from "@mui/material/Box";

const DistanceDetails = () => {
  let { id } = useParams();


  return (
    <Box sx={{display: "flex", flexDirection: "row"}} style={{height: "93vh", width: "100vw"}}>
      <Box>
        <Map></Map>
      </Box>
      
    </Box>
  );
};

export default DistanceDetails;
