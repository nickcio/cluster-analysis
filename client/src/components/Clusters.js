import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import BubbleChart from './BubbleChart';
import ReactApexChart from 'react-apexcharts';
import {Box, List, ListItem, TextField, Table, TableBody, TableCell, TableContainer, TableHead,
        TableRow, Paper} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'clusterSize', headerName: 'Cluster Size', type: 'number', width: 130 },
    { field: 'demDistricts', headerName: 'Democratic Districts', type: 'number', width: 140 },
    { field: 'repDistricts', headerName: 'Republican Districts', type: 'number', width: 140 },
    {
      field: 'ratio',
      headerName: 'R:D Ratio',
      type: 'number',
      width: 90,
    },
    {
      field: 'aaod',
      headerName: 'AAOD',
      description: 'African-American Opportunity Districts',
      type: 'number',
      width: 90,
    },
    {
      field: 'hod',
      headerName: 'HOD',
      description: 'Hispanic Opportunity Districts',
      type: 'number',
      width: 90,
    },
  ];
  
  const rows = [];

  for(let i = 1; i < 25; i++) {
    let size = Math.floor(Math.random()*500+10)
    let dem = size*Math.random()
    let rep = size-dem
    let rat = rep/dem
    let aaod = Math.floor(dem*Math.random())
    let hod = Math.floor(dem*Math.random())
    let row = {id: String(i), clusterSize:size, demDistricts:dem, repDistricts:rep, ratio:rat, aaod:aaod, hod:hod}
    rows.push(row)
  }

  
    
export default function Clusters() {


    /*
       Here we make the table for the cluster data with the scatter plot above where when we open it opns the individualized district
       plans within the cluster

       Makes different clusters based off the ensemble that it is in

       Make a bubble graph first of the different plans, Make the table for different values we need

       Table includes:
		Republicans'/Democratic splits
		Percentage of Republican Voters
		Percentage of Democratic Voters,
		Percentage of Demographic groups,
		Etc
    */

    const bubbleChartOptions = {
        chart: {
            type: 'bubble',
            zoom: {
                enabled: false,
                type: 'x',
                autoScaleYaxis: true,  
                zoomedArea: {
                fill: {
                        color: '#90CAF9',
                    opacity: 0.4
                },
                stroke: {
                    color: '#0D47A1',
                    opacity: 0.4,
                    width: 1
                },
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#008FFB', '#00E396', '#FEB019', '#A65FEC'],
        xaxis: {
            type: 'numeric',
            title: {
            text: 'Distance',
            forceNiceScale: false,
            min: 0,            
            max: 15,
            },
        },
        yaxis: {
            title: {
            text: 'State Range',
            },
        },
        };
    
        const bubbleChartData = [
        {
            name: 'Testing the cluster here in Arizona #1',
            label: 'Arizona Cluster #123132', 
            data: [
            { x: 9, y: 15, z: 10 },
            { x: 9, y: 2, z: 100 },
            { x: 4, y: 12, z: 300 },
            ],
        },
        {
            name: 'Testing the cluster here in Arizona #2',
            data: [
            { x: 2, y: 10, z: 20 },
            { x: 2, y: 5, z: 300 },
            ],
        },
        {
            name: 'Testing the cluster here in Arizona #3',
            data: [
            { x: 12, y: 30, z: 30},
            { x: 12, y: 10, z: 250},
            ],
        },
        {
            name: 'Testing the cluster here in Arizona #4',
            data: [
            { x: 5, y: 23, z: 20 },
            { x: 5, y: 12, z: 200 },
            ],
        },
        // Add more series if needed
        ];


    return (
        <Box style={{width: "50vw", height: "85vh", }} sx={{bgcolor: "white"}}>
            <Box style={{width: "50vw", height: "35vh", }}>
                 <BubbleChart/>
            </Box>
            
            {/* <ReactApexChart options={bubbleChartOptions} series={bubbleChartData} type="bubble" height={"45%"} width={"99%"}/> */}
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10},
                },
                }}
                sx ={{height:"55%"}}
                getRowHeight={() => 'auto'}
                

            />
        </Box>      
    )
}   

/*

*/

// /* <TableContainer component={Paper}>
//                 <Table sx={{ width: "100%" }} aria-label="simple table">
//                     <TableHead>
//                     <TableRow>
//                         <TableCell>Dessert (100g serving)</TableCell>
//                         <TableCell align="right">Calories</TableCell>
//                         <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                         <TableCell align="right">Protein&nbsp;(g)</TableCell>
//                     </TableRow>
//                     </TableHead>
//                     <TableBody>
//                     {rows.map((row) => (
//                         <TableRow
//                         key={row.name}
//                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                         <TableCell component="th" scope="row">
//                             {row.name}
//                         </TableCell>
//                         <TableCell align="right">{row.calories}</TableCell>
//                         <TableCell align="right">{row.fat}</TableCell>
//                         <TableCell align="right">{row.carbs}</TableCell>
//                         <TableCell align="right">{row.protein}</TableCell>
//                         </TableRow>
//                     ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>   <ReactApexChart options={bubbleChartOptions} series={bubbleChartData} type="bubble" height={300} />*/