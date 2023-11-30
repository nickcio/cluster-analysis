import { GlobalStoreContext } from "../store";
import { useContext, useState } from "react";

import AZBorders from "./geojson/AZBorders.json";
import SCBorders from "./geojson/SCBorders.json";
import TXBorders from "./geojson/TXBorders.json";
import AZDistricts from "./geojson/AZDistricts.json";
import SCDistricts from "./geojson/SCDistricts.json";
import TXDistricts from "./geojson/TXDistricts.json";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Map from './Map';

export default function StateSelectBanner() {
  const { store } = useContext(GlobalStoreContext);
  const navigate = useNavigate();
  let curState = store.currentState !== "" ? store.currentState : "";
  let curStateLabel = "Please Select A State"
  console.log("CUR STATE " + curState);
  if (curState !== "") {
    console.log(curState.features[0].properties.NAME);
  }

  let dropLabel =
    curState !== "" ? curState.features[0].properties.NAME : "Select State";
  if (dropLabel === "Arizona") {
    curStateLabel = <Typography fontWeight="bold" fontSize={20}>
                      Arizona State Assembly District Plan
                    </Typography>
  }
  else if (dropLabel === "South Carolina") {
    curStateLabel = <Typography fontWeight="bold" fontSize={20}>
                      South Carolina State Senate District Plan
                    </Typography> 
  }
  else if (dropLabel === "Texas") {
    curStateLabel = <Typography fontWeight="bold" fontSize={20}>
                      Texas Federal Congressional District Plan
                    </Typography> 
  }

  const handleChange = (event) => {
    let stateValue = event.target.value;
    if (stateValue == "Arizona") {
      store.setState(AZBorders,AZDistricts);
    } else if (stateValue == "South Carolina") {
      store.setState(SCBorders,SCDistricts);
    } 
    else if (stateValue == "Texas") {
      store.setState(TXBorders,TXDistricts);
    }
    navigate(`/state/${event.target.value}`);
  };

  return (
    <Box sx={{display: "flex", flexDirection: "row"}} style={{height: "93vh", width: "100vw"}}>
      <Box>
        <Map></Map>
      </Box>
      <Outlet/>
    <Grid
      container
      spacing={0}
      sx={{ bgcolor: "white" }}
      style={{ height: "8vh", display: "flex", alignItems: "center" }}
    >
      <Grid item xs={4}>
        <FormControl style={{ width: "15vw" }}>
          <InputLabel id="state_select_label" style={{ fontWeight: "bold" }}>
            State
          </InputLabel>
          <Select
            labelId="state_select_label"
            id="state_select"
            value={dropLabel}
            label="State"
            onChange={handleChange}
            style={{ fontWeight: "bold" }}
          >
            {dropLabel === "Select State" && (
              <MenuItem value={"Select State"}>Select State</MenuItem>
            )}
            <MenuItem value={"Arizona"}>Arizona</MenuItem>
            <MenuItem value={"South Carolina"}>South Carolina</MenuItem>
            <MenuItem value={"Texas"}>Texas</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={8} style={{ fontSize: 20, fontWeight: "500" }}>
        {curStateLabel}
      </Grid>
    </Grid>
    </Box>
  );
}
