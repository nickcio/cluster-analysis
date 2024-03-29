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
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function StateSelectBanner() {
  const { store } = useContext(GlobalStoreContext);
  let curState = store.currentState !== "" ? store.currentState : "";
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

  console.log(`Drop Label: ${dropLabel}`);

  const handleChange = (event) => {
    let stateValue = event.target.value;
    if (stateValue == "Arizona") {
      store.setState(AZBorders,AZDistricts);
      
      // if(store.currentEnsemble !== "")
      // {
      //   store.setEnsemble("");
      // }
    } else if (stateValue == "South Carolina") {
      store.setState(SCBorders,SCDistricts);
      
      // if(store.currentEnsemble !== "")
      // {
      //   store.setEnsemble("");
      // }
    } else if (stateValue == "Texas") {
      store.setState(TXBorders,TXDistricts);
      
      // if(store.currentEnsemble !== "")
      // {
      //   store.setEnsemble("");
      // }
    }

  };

  console.log(store);

  let breadcrumbs = [...store.pathToCurrent];
  breadcrumbs.pop();
  return (
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
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((item, index) => (
          <Link
            key={index}
            underline="hover"
            color="inherit"
            href={item.link}
          >
            {item.label}
          </Link>
        ))}
        <Typography color="text.primary">{store.pathToCurrent[store.pathToCurrent.length - 1].label}</Typography>
      </Breadcrumbs>
      <Grid item xs={8}>
        {curStateLabel}
      </Grid>
    </Grid>
  );
}
