import { GlobalStoreContext } from '../store'
import { useContext, useState } from 'react'
import AZBorders from './geojson/AZBorders.json';
import SCBorders from './geojson/SCBorders.json';
import TXBorders from './geojson/TXBorders.json';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

export default function StateSelectBanner() {
    const { store } = useContext(GlobalStoreContext);
    let curState = store.currentState !== "" ? store.currentState : ""
    console.log("CUR STATE " + curState)
    if (curState !== "") {
        console.log(curState.features[0].properties.NAME)
    }
    let dropLabel = curState !== "" ? curState.features[0].properties.NAME : "Select State"

    const handleSelectAZ = () => {
        store.setState(AZBorders)
    }
    const handleSelectTX = () => {
        store.setState(TXBorders)
    }
    const handleSelectSC = () => {
        store.setState(SCBorders)
    }

    return (
        <Grid container spacing={0} sx={{bgcolor: "white"}} style={{height: "8vh", display: "flex", alignItems: "center"}}>
            <Grid item xs={4}>
                <FormControl style={{width: "13vw"}}>
                    <InputLabel htmlFor="this_is_a_label" sx={{bgcolor: "white"}} style={{fontWeight: "bold"}}>{dropLabel}</InputLabel>
                    <Select labelId="this_is_a_label">
                        <MenuItem onClick={handleSelectAZ}>Arizona</MenuItem>
                        <MenuItem onClick={handleSelectSC}>South Carolina</MenuItem>
                        <MenuItem onClick={handleSelectTX}>Texas</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" style={{height: "5.5vh", width: "13vw", fontWeight: "bold"}}>This Is A Button</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" style={{height: "5.5vh", width: "13vw", fontWeight: "bold"}}>This Is A Button 2</Button>
            </Grid>
        </Grid>
    )
}