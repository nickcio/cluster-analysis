import { useContext } from 'react'

import StateSelectBanner from "./StateSelectBanner"

import Box from "@mui/material/Box";

export default function Menu() {
    return(
        <Box sx={{bgcolor: "lightgrey"}} style={{width: "60%", height: "93vh"}}>
            <StateSelectBanner/>
            Hello
        </Box>
    )
}