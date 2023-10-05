import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import ServerTest from './ServerTest'
import StateSelectBanner from "./StateSelectBanner"
import EnsembleSelection from "./EnsembleSelection"
import {Box, Button} from "@mui/material";
import Clusters from './Clusters';
import DistanceMeasure from './DistanceMeasure';
import DistrictPlans from './DistrictPlans';

import eaglesLogo from "./images/logo.png";

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
    else {
        menuDisplay = 
        <Box
            sx={{width: "50vw", height: "85vh"}}
            style={{display: "flex", alignItems: "center", justifyContent: "center"}}
        >
            <Box
                component="img"
                sx={{height: 400, width: 600}}
                style={{opacity: 0.2, left: 5000, top: 200}}
                alt="Eagles Logo"
                src={eaglesLogo}
            >
            </Box>
            {/* <Button onClick={<ServerTest></ServerTest>}> The button is here</Button> */}
            <ServerTest></ServerTest>
        </Box>
    }
    /*
    What we want to do:
        Select Screen: Over view of what we do or whatever

        After the state is selected: Ensembles screen (where multiple ensables are being shown (update the breadcrumb list with that))

        After an Ensemble is selected: Show the Scatter plot, and its district stuff in the table (Update the breadcrumb)

        After a cluster is selected: Show the scatter plot with the district plans in ut with the table determining other stuff (Update the breadcrumb)
        
    */
   
    return (
        <Box sx={{bgcolor: "#e5eef3"}} style={{width: "50vw", height: "93vh"}}>
            <StateSelectBanner/>
            {menuDisplay}
        </Box>
    )
}
