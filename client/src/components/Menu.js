import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'

import StateSelectBanner from "./StateSelectBanner"
import EnsembleSelection from "./EnsembleSelection"

import Box from "@mui/material/Box";
import Clusters from './Clusters';
import DistanceMeasure from './DistanceMeasure';
import DistrictPlans from './DistrictPlans';

export default function Menu() {
    const { store } = useContext(GlobalStoreContext);
    let curState = store.currentState !== "" ? store.currentState : ""
    let curEnsemble = store.currentEnsemble !== "" ? store.currentEnsemble : ""
    let curCluster = store.currentCluster !== "" ? store.currentCluster : ""
    let curDistance = store.currentDistance !== "" ? store.currentDistance : ""
    let displayName = curState !== "" ? store.currentState.features[0].properties.NAME : "NO STATE"
    let menuDisplay = <></>
    if (curCluster !== "") {
        menuDisplay = <DistrictPlans/>
        console.log("Inside the Menu if statement")
    }
    else if(curDistance !== "") {
        menuDisplay = <DistanceMeasure/>
        console.log("Inside the Distance if statement" + {curDistance})
    }
    else if (curEnsemble !== "") {
        menuDisplay = <Clusters/>
        console.log("Inside the Clusters if statement")
    }
    else if (curState !== "") {
        menuDisplay = <EnsembleSelection/>
        console.log("Inside the Ensemble if statement")
    }
    /*
    What we want to do:
        Select Screen: Over view of what we do or whatever

        After the state is selected: Ensembles screen (where multiple ensables are being shown (update the breadcrumb list with that))

        After an Ensemble is selected: Show the Scatter plot, and its district stuff in the table (Update the breadcrumb)

        After a cluster is selected: Show the scatter plot with the district plans in ut with the table determining other stuff (Update the breadcrumb)
        
    */
   
    return (
        <Box sx={{bgcolor: "lightgrey"}} style={{width: "50vw", height: "93vh"}}>
            <StateSelectBanner/>
            {menuDisplay}
        </Box>
    )
}
