import React, { useContext, useEffect} from 'react';
import { GlobalStoreContext } from "../store";
import { useParams} from 'react-router-dom';
import Map from './Map';
import Box from "@mui/material/Box";
import DistanceMatrix from './DistanceMatrixTable';

import { useLocation } from 'react-router-dom';

const DistanceDetails = () => {
  let location = useLocation();
  const { store } = useContext(GlobalStoreContext);


  return (
    <Box sx={{display: "flex", flexDirection: "column", overflow:"hidden"}} style={{height: "93vh", width: "100vw",}}>
      <DistanceMatrix optimal_transport={store.currentOptimalMatrix} nameOfTable={"Optimal Transport"}></DistanceMatrix>
      <DistanceMatrix optimal_transport={store.currentHammingMatrix} nameOfTable={"Hamming Matrix"}></DistanceMatrix>

    </Box>
  );
};

export default DistanceDetails;
