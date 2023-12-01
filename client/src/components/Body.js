import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import StateSelectBanner from "./StateSelection"
import {Box, Button} from "@mui/material";
import Map from './Map';


export default function Menu() {
    const { store } = useContext(GlobalStoreContext);

    return (
        <Box sx={{display: "flex", flexDirection: "row", bgcolor: "#e5eef3"}} style={{height: "93vh", width: "100vw"}}>
        <Map/>
        <StateSelectBanner/>
        </Box>
    )
}
