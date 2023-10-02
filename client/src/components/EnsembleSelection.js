import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'


import {Box, List, ListItem, TextField, Typography, Button} from "@mui/material";


export default function EnsembleSelection() {

    /*
        Here we want to make a display of all the diffeent ensambles that we can open up a cluster page 
        so make a different list of different ensambles that you can click into to view the clusters
    */
    const { store } = useContext(GlobalStoreContext);
    let curState = store.currentState !== "" ? store.currentState : ""
    let displayName = curState !== "" ? store.currentState.features[0].properties.NAME : "NO STATE"
    
    return (
        <Box style={{width: "50vw", height: "85vh"}}>
            <List sx={{bgcolor: "#adadad"}} style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>

                <ListItem sx={{bgcolor: "#d6d6d6"}} style={{width: "80%", height: "20%", borderRadius: "20px", margin: "10px", display: "flex", justifyContent: "space-between"}}>
                    <Box style={{width: "30%"}}>
                        <Typography variant="h5" fontWeight="bold" sx={{color: "black"}}>
                            Ensemble 1
                        </Typography>
                        <Typography variant="h7" fontWeight="bold" sx={{color: "black"}}>
                            9,232 District Plans
                        </Typography>
                    </Box>
                    <Box style={{width: "60%", display: "flex", justifyContent: "space-between"}}>
                        <Button
                        variant="contained"
                        style={{ height: "5vh", width: "13vw", fontWeight: "bold" }}
                        sx={{bgcolor: "#33586f"}}
                        >
                        Ensemble Details
                        </Button>
                        
                        <Button
                        variant="contained"
                        style={{ height: "5vh", width: "13vw", fontWeight: "bold" }}
                        sx={{bgcolor: "#33586f"}}
                        >
                            Distance Details
                        </Button>
                    </Box>
                </ListItem>

                <ListItem sx={{bgcolor: "white"}} style={{width: "80%", height: "20%", borderRadius: "20px", margin: "10px", display: "flex", justifyContent: "space-between"}}>
                    <Box style={{width: "30%"}}>
                        <Typography variant="h5" fontWeight="bold" sx={{color: "black"}}>
                            Ensemble 2
                        </Typography>
                        <Typography variant="h7" fontWeight="bold" sx={{color: "black"}}>
                            7,384 District Plans
                        </Typography>
                    </Box>

                    <Box style={{width: "60%", display: "flex", justifyContent: "space-between"}}>
                        <Button
                        variant="contained"
                        style={{ height: "5vh", width: "13vw", fontWeight: "bold" }}
                        sx={{bgcolor: "#33586f"}}
                        >
                        Ensemble Details
                        </Button>
                        
                        <Button
                        variant="contained"
                        style={{ height: "5vh", width: "13vw", fontWeight: "bold" }}
                        sx={{bgcolor: "#33586f"}}
                        >
                            Distance Details
                        </Button>
                    </Box>
                </ListItem>
                
                <ListItem sx={{bgcolor: "#d6d6d6"}} style={{width: "80%", height: "20%", borderRadius: "20px", margin: "10px", display: "flex", justifyContent: "space-between"}}>
                    <Box style={{width: "30%"}}>
                        <Typography variant="h5" fontWeight="bold" sx={{color: "black"}}>
                            Ensemble 3
                        </Typography>
                        <Typography variant="h7" fontWeight="bold" sx={{color: "black"}}>
                            5,617 District Plans
                        </Typography>
                    </Box>

                    <Box style={{width: "60%", display: "flex", justifyContent: "space-between"}}>
                        <Button
                        variant="contained"
                        style={{ height: "5vh", width: "13vw", fontWeight: "bold" }}
                        sx={{bgcolor: "#33586f"}}
                        >
                        Ensemble Details
                        </Button>
                        
                        <Button
                        variant="contained"
                        style={{ height: "5vh", width: "13vw", fontWeight: "bold" }}
                        sx={{bgcolor: "#33586f"}}
                        >
                            Distance Details
                        </Button>
                    </Box>
                </ListItem>
                
                <ListItem sx={{bgcolor: "white"}} style={{width: "80%", height: "20%", borderRadius: "20px", margin: "10px", display: "flex", justifyContent: "space-between"}}>
                    <Box style={{width: "30%"}}>
                        <Typography variant="h5" fontWeight="bold" sx={{color: "black"}}>
                            Ensemble 4
                        </Typography>
                        <Typography variant="h7" fontWeight="bold" sx={{color: "black"}}>
                            4,789 District Plans
                        </Typography>
                    </Box>

                    <Box style={{width: "60%", display: "flex", justifyContent: "space-between"}}>
                        <Button
                        variant="contained"
                        style={{ height: "5vh", width: "13vw", fontWeight: "bold" }}
                        sx={{bgcolor: "#33586f"}}
                        >
                        Ensemble Details
                        </Button>
                        
                        <Button
                        variant="contained"
                        style={{ height: "5vh", width: "13vw", fontWeight: "bold" }}
                        sx={{bgcolor: "#33586f"}}
                        >
                            Distance Details
                        </Button>
                    </Box>
                </ListItem>
                
                <ListItem sx={{bgcolor: "#d6d6d6"}} style={{width: "80%", height: "20%", borderRadius: "20px", margin: "10px", display: "flex", justifyContent: "space-between"}}>
                    <Box style={{width: "30%"}}>
                        <Typography variant="h5" fontWeight="bold" sx={{color: "black"}}>
                            Ensemble 5
                        </Typography>
                        <Typography variant="h7" fontWeight="bold" sx={{color: "black"}}>
                            2,549 District Plans
                        </Typography>
                    </Box>

                    <Box style={{width: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <Button
                        variant="contained"
                        style={{ height: "4vh", width: "13vw", fontWeight: "bold", marginBotton: "1px"}}
                        sx={{bgcolor: "#33586f", marginBotton: "1px"}}
                        >
                        Ensemble Details
                        </Button>
                        
                        <Button
                        variant="contained"
                        style={{ height: "4vh", width: "13vw", fontWeight: "bold" }}
                        sx={{bgcolor: "#33586f"}}
                        >
                            Distance Details
                        </Button>
                    </Box>
                </ListItem>
            </List>
            
        </Box>

        
    )
}   