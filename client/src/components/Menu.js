import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import StateSelectBanner from "./StateSelectBanner"

import Box from "@mui/material/Box";

export default function Menu() {
    const { store } = useContext(GlobalStoreContext);
    return(
        <Box sx={{bgcolor: "lightgrey"}} style={{width: "60%", height: "93vh"}}>
            <StateSelectBanner/>
            {store.currentState}
        </Box>
    )
}