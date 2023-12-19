import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Map from './Map';
import {Box, Typography, Button} from "@mui/material";
import ClusterChart from './ClusterChart';
import ClusterTable from './ClusterTable';
import MdsDisplay from './MDSDisplay';

const EnsembleDetails = () => {
  let { stateId, ensembleId } = useParams();
  const [clusters, setClusters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchClusters = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8080/retrieveClusters?state=${stateId}&ensemble_id=${ensembleId}`);
        if (response.ok) {
          const data = await response.json();
          setClusters(data);
        } else {
          console.error('Failed to fetch clusters:', response.statusText);
        }
      } catch (error) {
        console.error("Fetching error: ", error);
      }
      finally {
        setIsLoading(false);
      }
    };

    fetchClusters();

    var leafletContainers = document.querySelectorAll('.leaflet-container');
    leafletContainers.forEach(function(container) {
      container.style.height = '45vh';
    });

  }, []); 


  const simplifiedClusters = clusters.map((cluster, index) => ({
    id: index + 1,
    backendId: cluster._id,
    num_district_plans: cluster.num_district_plans,
    centroid: cluster.centroid,
    average_euclidean_distance: cluster.average_euclidean_distance,
    dem_votes_percent: cluster.average_rep_dem_split.Democratic,
    rep_votes_percent: cluster.average_rep_dem_split.Republican,
    average_dem_votes_percent: cluster.average_dem_votes_percent,
    average_rep_votes_percent: cluster.average_rep_votes_percent,
    average_margin_of_victory: cluster.average_margin_of_victory,
    average_opportunity_districts: cluster.average_opportunity_districts,
    average_population_margin: cluster.average_population_margin,
    pop_white: cluster.average_demographic_percent.pop_white,
    pop_hisp: cluster.average_demographic_percent.pop_hisp,
    pop_black: cluster.average_demographic_percent.pop_black,
    pop_other: cluster.average_demographic_percent.pop_other,
    average_plan: cluster.average_plan
  }));
  console.log(simplifiedClusters);

  let mds = [];
  for(let i = 0; i < clusters.length; i++){
      mds.push(clusters[i].centroid);
  }

  return (
    <Box sx={{display: "flex", flexDirection: "row"}} style={{height: "93vh", width: "100vw"}}>
      <Box sx={{padding:2}}>
        <Map></Map>
        <MdsDisplay clusterData={mds} mdsName="cluster"></MdsDisplay>
      </Box>
      <Typography variant="h7" component="h5" gutterBottom sx={{ width: "100%", position:'fixed', left:'22%', margin: 2 }}>
          Ensemble Details
      </Typography>
      <ClusterChart 
        data={simplifiedClusters} 
        xAxisKey="average_plan" 
        yAxisKey="num_district_plans" 
        />
        <ClusterTable data={simplifiedClusters} />
    </Box>
  );
};

export default EnsembleDetails;


