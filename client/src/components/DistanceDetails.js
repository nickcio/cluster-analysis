import React, { useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import Map from './Map';
import Box from "@mui/material/Box";
import DistanceMatrix from './DistanceMatrixTable';

const DistanceDetails = () => {
  let { id } = useParams();
  useEffect(() => {

    var leafletContainers = document.querySelectorAll('.leaflet-container');
    leafletContainers.forEach(function(container) {
      console.log(container);
      container.style.height = '50vh';
    });

  }, []); 

  let distanceMatrix = getDistanceMatrix();



  return (
    <Box sx={{display: "flex", flexDirection: "row"}} style={{height: "93vh", width: "100vw"}}>
      <Box>
        <Map></Map>
      </Box>
      <DistanceMatrix distanceData={distanceMatrix}></DistanceMatrix>

    </Box>
  );
};


function getDistanceMatrix (){
  return [
    {
        "District #": "2",
        "To D1": "0.161",
        "To D2": "0.146",
        "To D3": "0.959",
        "To D4": "0.757",
        "To D5": "0.667",
        "To D6": "0.893",
        "To D7": "0.353",
        "To D8": "0.898",
        "To D9": "0.573",
        "To D10": "0.863"
    },
    {
        "District #": "3",
        "To D1": "0.167",
        "To D2": "0.654",
        "To D3": "0.115",
        "To D4": "0.858",
        "To D5": "0.558",
        "To D6": "0.711",
        "To D7": "0.129",
        "To D8": "0.641",
        "To D9": "0.95",
        "To D10": "0.421"
    },
    {
        "District #": "4",
        "To D1": "0.823",
        "To D2": "0.016",
        "To D3": "0.576",
        "To D4": "0.189",
        "To D5": "0.879",
        "To D6": "0.612",
        "To D7": "0.077",
        "To D8": "0.675",
        "To D9": "0.802",
        "To D10": "0.023"
    },
    {
        "District #": "5",
        "To D1": "0.266",
        "To D2": "0.977",
        "To D3": "0.64",
        "To D4": "0.037",
        "To D5": "0.569",
        "To D6": "0.111",
        "To D7": "0.543",
        "To D8": "0.739",
        "To D9": "0.775",
        "To D10": "0.812"
    },
    {
        "District #": "6",
        "To D1": "0.66",
        "To D2": "0.68",
        "To D3": "0.661",
        "To D4": "0.711",
        "To D5": "0.608",
        "To D6": "0.325",
        "To D7": "0.566",
        "To D8": "0.676",
        "To D9": "0.758",
        "To D10": "0.662"
    },
    {
        "District #": "7",
        "To D1": "0.244",
        "To D2": "0.85",
        "To D3": "0.073",
        "To D4": "0.604",
        "To D5": "0.051",
        "To D6": "0.037",
        "To D7": "0.537",
        "To D8": "0.175",
        "To D9": "0.474",
        "To D10": "0.541"
    },
    {
        "District #": "8",
        "To D1": "0.601",
        "To D2": "0.824",
        "To D3": "0.814",
        "To D4": "0.724",
        "To D5": "0.662",
        "To D6": "0.353",
        "To D7": "0.341",
        "To D8": "0.444",
        "To D9": "0.674",
        "To D10": "0.25"
    },
    {
        "District #": "9",
        "To D1": "0.174",
        "To D2": "0.951",
        "To D3": "0.128",
        "To D4": "0.566",
        "To D5": "0.293",
        "To D6": "0.353",
        "To D7": "0.591",
        "To D8": "0.21",
        "To D9": "0.847",
        "To D10": "0.413"
    },
    {
        "District #": "8",
        "To D1": "0.601",
        "To D2": "0.824",
        "To D3": "0.814",
        "To D4": "0.724",
        "To D5": "0.662",
        "To D6": "0.353",
        "To D7": "0.341",
        "To D8": "0.444",
        "To D9": "0.674",
        "To D10": "0.25"
    },
    {
        "District #": "9",
        "To D1": "0.174",
        "To D2": "0.951",
        "To D3": "0.128",
        "To D4": "0.566",
        "To D5": "0.293",
        "To D6": "0.353",
        "To D7": "0.591",
        "To D8": "0.21",
        "To D9": "0.847",
        "To D10": "0.413"
    },
    {
        "District #": "8",
        "To D1": "0.601",
        "To D2": "0.824",
        "To D3": "0.814",
        "To D4": "0.724",
        "To D5": "0.662",
        "To D6": "0.353",
        "To D7": "0.341",
        "To D8": "0.444",
        "To D9": "0.674",
        "To D10": "0.25"
    },
    {
        "District #": "9",
        "To D1": "0.174",
        "To D2": "0.951",
        "To D3": "0.128",
        "To D4": "0.566",
        "To D5": "0.293",
        "To D6": "0.353",
        "To D7": "0.591",
        "To D8": "0.21",
        "To D9": "0.847",
        "To D10": "0.413"
    },
    {
        "District #": "8",
        "To D1": "0.601",
        "To D2": "0.824",
        "To D3": "0.814",
        "To D4": "0.724",
        "To D5": "0.662",
        "To D6": "0.353",
        "To D7": "0.341",
        "To D8": "0.444",
        "To D9": "0.674",
        "To D10": "0.25"
    },
    {
        "District #": "9",
        "To D1": "0.174",
        "To D2": "0.951",
        "To D3": "0.128",
        "To D4": "0.566",
        "To D5": "0.293",
        "To D6": "0.353",
        "To D7": "0.591",
        "To D8": "0.21",
        "To D9": "0.847",
        "To D10": "0.413"
    },
    {
        "District #": "10",
        "To D1": "0.712",
        "To D2": "0.64",
        "To D3": "0.255",
        "To D4": "0.614",
        "To D5": "0.021",
        "To D6": "0.313",
        "To D7": "0.337",
        "To D8": "0.915",
        "To D9": "0.923",
        "To D10": "0.167"
    },
    {
        "District #": "11",
        "To D1": "0.314",
        "To D2": "0.782",
        "To D3": "0.214",
        "To D4": "0.184",
        "To D5": "0.92",
        "To D6": "0.827",
        "To D7": "0.302",
        "To D8": "0.916",
        "To D9": "0.389",
        "To D10": "0.622"
    }
];
}
export default DistanceDetails;
