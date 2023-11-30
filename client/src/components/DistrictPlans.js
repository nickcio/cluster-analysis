import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import PlanScatterPlot from './PlanScatterPlot';
import ReactApexChart from 'react-apexcharts';
import {Box, List, ListItem, TextField, Table, TableBody, TableCell, TableContainer, TableHead,
        TableRow, Paper} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'District Plan', width: 90 },
    { field: 'vap', headerName: 'Voting Age Pop.', type: 'number', width: 140 },
    { field: 'pop', headerName: 'African-American Pop.', type: 'number', width: 160 },
    { field: 'size', headerName: 'Size (km²)', type: 'number', width: 100 },
    {
      field: 'dens',
      headerName: 'Pop. Density',
      description: 'Population density per square kilometer',
      type: 'number',
      width: 130,
    },
    {
      field: 'income',
      headerName: 'Avg. Income USD',
      description: 'Average Income in USD',
      type: 'number',
      width: 140,
    },
  ];
  

  const rows = [];

  for (let i = 1; i < 25; i++) {
    let pop = Math.floor(Math.random()*100000+1000000)+Math.floor(Math.random()*100000000)
    let size = Math.floor(Math.random()*100000+5000)
    let income = Math.floor(Math.random()*100000+50000)
    let row = {id: String(i), pop:Math.floor(pop*Math.random()), vap:Math.floor(pop*0.78), size:size, dens:pop/size, income:income}
    rows.push(row)
  }
  
    
export default function Plans() {

    return (
        <Box style={{width: "55vw", height: "85vh", }} sx={{bgcolor: "white"}}>
            <Box style={{width: "55vw", height: "35vh", }}>
                 <PlanScatterPlot/>
            </Box>
            
            {/* <ReactApexChart options={bubbleChartOptions} series={bubbleChartData} type="bubble" height={"45%"} width={"99%"}/> */}
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 15},
                },
                }}
                sx ={{height:"55%", fontSize: "1.5vh", fontWeight: 550}}
                getRowHeight={() => 'auto'}
                getRowClassName={(params) =>
                  params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
                }

            />
        </Box>      
    )
}   