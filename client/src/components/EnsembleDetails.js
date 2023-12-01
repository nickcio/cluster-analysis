import React from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Map from './Map';
import Box from "@mui/material/Box";
import ClusterChart from './ClusterChart';
import ClusterTable from './ClusterTable';
import MdsDisplay from './MDSDisplay';

const EnsembleDetails = () => {
  let { stateId, ensembleId } = useParams();
  useEffect(() => {
    var leafletContainers = document.querySelectorAll('.leaflet-container');
    leafletContainers.forEach(function(container) {
      console.log(container);
      container.style.height = '45vh';
    });
  }, []);

  const clusterData = [
    { name: 'Cluster 1', id: '1', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 400, otherPercentage: Math.random() * 100},
    { name: 'Cluster 2', id: '2', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 30, otherPercentage: Math.random() * 100},
    { name: 'Cluster 3', id: '3', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 200, otherPercentage: Math.random() * 100},
    { name: 'Cluster 4', id: '4', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 280, otherPercentage: Math.random() * 100},
    { name: 'Cluster 5', id: '5', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 300, otherPercentage: Math.random() * 100 },
    { name: 'Cluster 6', id: '6', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 400, otherPercentage: Math.random() * 100},
    { name: 'Cluster 7', id: '7', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 30, otherPercentage: Math.random() * 100},
    { name: 'Cluster 8', id: '8', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 200, otherPercentage: Math.random() * 100},
    { name: 'Cluster 9', id: '9', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 280, otherPercentage: Math.random() * 100},
    { name: 'Cluster 10', id: '10', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 300, otherPercentage: Math.random() * 100},
    { name: 'Cluster 11', id: '11', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 30, otherPercentage: Math.random() * 100},
    { name: 'Cluster 12', id: '12', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 200, otherPercentage: Math.random() * 100},
    { name: 'Cluster 13', id: '13', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 280, otherPercentage: Math.random() * 100},
    { name: 'Cluster 14', id: '14', percentDemocratic: Math.random() * 100, percentRepublican: Math.random() * 100, clusterSize: 300, otherPercentage: Math.random() * 100},
  ];
  

  return (
    <Box sx={{display: "flex", flexDirection: "row"}} style={{height: "93vh", width: "100vw"}}>
      <Box sx={{padding:2}}>
        <Map></Map>
        <MdsDisplay clusterData={clusterData}></MdsDisplay>
      </Box>
      <ClusterChart 
        data={clusterData} 
        xAxisKey="percentDemocratic" 
        yAxisKey="percentRepublican" 
        sizeKey="clusterSize"
        />
        <ClusterTable data={clusterData} />
    </Box>
  );
};

export default EnsembleDetails;
