import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import { useContext } from 'react'
import { ApexGrid } from 'apex-grid';

ApexGrid.register();

const grid = document.createElement('apex-grid');
grid.autoGenerate = true;
grid.data = [];

export default function Body(){
    return(
        <Box sx={{display: "flex", flexDirection: "row"}} style={{height: "93vh", width: "100vw"}}>
            
        </Box>
    )
}