import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"


import RefreshIcon from '@mui/icons-material/Refresh';

import eaglesLogo from "./images/eagle.png";

export default function AppBanner() {

    // Placeholder, for now it refreshes the page but it should probably be that only the gui components revert 
    const handleRefreshButton = () => {
        window.location.reload()
    }

    return (
       <AppBar sx={{bgcolor: "#2f2f30"}} style={{height: "7vh"}} position="static">
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
            <Box>
                <img src={eaglesLogo} height={60} width={60}/>
            </Box>
            <Typography variant="h4" fontWeight="bold">
                Cluster Analysis
            </Typography>
            <Box>
                <IconButton 
                    size="medium" 
                    sx={{bgcolor: "#544c4c", color: "white"}} 
                    style={{ borderRadius: "15px", fontWeight:"bold"}}
                    onClick={handleRefreshButton}>
                    <RefreshIcon sx={{color: "white", marginRight: "3px"}}></RefreshIcon>
                </IconButton>
            </Box>
        </Toolbar>
       </AppBar>
    );
}