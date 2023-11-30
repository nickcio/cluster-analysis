import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import StateSelectBanner from "./StateSelection"
import {Box, Button} from "@mui/material";

import eaglesLogo from "./images/logo.png";

export default function Menu() {
    const { store } = useContext(GlobalStoreContext);
    let curState = store.currentState !== "" ? store.currentState : ""
    let curEnsemble = store.currentEnsemble !== "" ? store.currentEnsemble : ""
    let curCluster = store.currentCluster !== "" ? store.currentCluster : ""
    let curDistance = store.currentDistance !== "" ? store.currentDistance : ""
    let displayName = curState !== "" ? store.currentState.features[0].properties.NAME : "NO STATE"

    return (
        <Box sx={{bgcolor: "#e5eef3"}} style={{width: "60vw", height: "93vh"}}>
            <StateSelectBanner/>
        </Box>
    )
}
