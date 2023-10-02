import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from '@mui/icons-material/Replay';

import eaglesLogo from "./images/logo.png";

export default function AppBanner() {
  // Placeholder, for now it refreshes the page but it should probably be that only the gui components revert
  const handleRefreshButton = () => {
    window.location.reload();
  };

  return (
    <AppBar
      sx={{ bgcolor: "#33586f" }}
      style={{ height: "7vh" }}
      position="static"
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={eaglesLogo} height={40} width={70} />
        </Box>
        <Typography id="webpage-title" variant="h5" fontWeight="bold">
          CLUSTER ANALYSIS
        </Typography>
        <Box>
          <IconButton
            size="medium"
            sx={{color: "white" }}
            style={{fontWeight: "bold" }}
            onClick={handleRefreshButton}
          >
            <RefreshIcon sx={{ color: "white" }}></RefreshIcon>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
