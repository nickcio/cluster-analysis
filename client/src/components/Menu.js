import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import StateSelectBanner from "./StateSelectBanner"

import Box from "@mui/material/Box";

export default function Menu() {
    const { store } = useContext(GlobalStoreContext);
    let curState = store.currentState !== "" ? store.currentState : ""
    let displayName = curState !== "" ? store.currentState.features[0].properties.NAME : "NO STATE"
    return(
        <Box sx={{bgcolor: "lightgrey"}} style={{width: "60%", height: "93vh"}}>
            <StateSelectBanner/>
            {displayName}
        </Box>
    )
}