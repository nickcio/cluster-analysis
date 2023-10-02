import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'

import {Box, List, ListItem, TextField, Typography, Button} from "@mui/material";


export default function EnsembleSelection() {


    /*
        Here we want to make a display of all the diffeent ensambles that we can open up a cluster page 
        so make a different list of different ensambles that you can click into to view the clusters
    */


    return (
        <Box style={{width: "60vw", height: "85vh"}}>
            <List sx={{bgcolor: "lightgrey"}} style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Button variant="contained" sx={{bgcolor: "grey"}} style={{width: "80%", height: "20%", borderRadius: "20px", margin: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <Typography variant="h4" fontWeight="bold" sx={{color: "black"}}>
                        Ensemble 1
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{color: "black"}}>
                        9,232 District Plans
                    </Typography>
                </Button>
                <Button variant="contained" sx={{bgcolor: "white"}} style={{width: "80%", height: "20%", borderRadius: "20px", margin: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <Typography variant="h4" fontWeight="bold" sx={{color: "black"}}>
                        Ensemble 2
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{color: "black"}}>
                        7,384 District Plans
                    </Typography>
                </Button>
                <Button variant="contained" sx={{bgcolor: "grey"}} style={{width: "80%", height: "20%", borderRadius: "20px", margin: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <Typography variant="h4" fontWeight="bold" sx={{color: "black"}}>
                        Ensemble 3
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{color: "black"}}>
                        5,617 District Plans
                    </Typography>
                </Button>
                <Button variant="contained" sx={{bgcolor: "white"}} style={{width: "80%", height: "20%", borderRadius: "20px", margin: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <Typography variant="h4" fontWeight="bold" sx={{color: "black"}}>
                        Ensemble 4
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{color: "black"}}>
                        4,789 District Plans
                    </Typography>
                </Button>
                <Button variant="contained" sx={{bgcolor: "grey"}} style={{width: "80%", height: "20%", borderRadius: "20px", margin: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <Typography variant="h4" fontWeight="bold" sx={{color: "black"}}>
                        Ensemble 5
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{color: "black"}}>
                        2,549 District Plans
                    </Typography>
                </Button>
            </List>
            
        </Box>

        
    )
}   