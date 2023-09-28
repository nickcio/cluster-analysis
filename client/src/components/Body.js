import Map from './Map';
import Menu from './Menu';

import Box from "@mui/material/Box";

import { useContext } from 'react'

export default function Body(){
    return(
        <Box sx={{display: "flex", flexDirection: "row"}} style={{height: "93vh", width: "100vw"}}>
            <Map/>
            <Menu/>
        </Box>
    )
}