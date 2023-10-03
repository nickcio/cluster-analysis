import React, { useContext, useState } from "react";
import { GlobalStoreContext } from "../store";
import BubbleChart from "./BubbleChart";
import ReactApexChart from "react-apexcharts";
import {
  Box,
  List,
  ListItem,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: 'id', headerName: 'Cluster #', width: 70 },
    { field: 'clusterSize', headerName: 'Cluster Size', type: 'number', width: 100 },
    { field: 'demDistricts', headerName: '% Democratic', type: 'number', width: 140 },
    { field: 'repDistricts', headerName: '% Republican', type: 'number', width: 140 },
    {
      field: 'wp',
      headerName: '% White',
      type: 'number',
      width: 90,
    },
    {
      field: 'aaod',
      headerName: '% AA',
      description: '% African-American',
      type: 'number',
      width: 90,
    },
    {
      field: 'hod',
      headerName: '% Hisp.',
      description: '% Hispanic',
      type: 'number',
      width: 90,
    },
  ];
  
  const rows = [];

  for(let i = 1; i < 25; i++) {
    let size = Math.floor(Math.random()*500+10)
    let dem = size*Math.random()
    let rep = size-dem
    let wp = Math.random()*40
    let aaod = Math.floor(dem*Math.random())
    let hod = Math.floor(dem*Math.random())
    let row = {id: String(i), clusterSize:size, demDistricts:dem/size*100, repDistricts:rep/size*100, wp:wp, aaod:aaod/size*100, hod:hod/size*100}
    rows.push(row)
  }
    
export default function Clusters() {
  const { store } = useContext(GlobalStoreContext);
  const handleEvent = (params, event, details, ) => {
    store.setCluster("Cluster");
  };

  const postRowStyle = (record,index) => {
    console.log("POST ROW STYLE! " + {record} + " " + {index})
    console.log({record})
    //return backgroundColor: record.id % 2 == 0 ? 'black' : 'white',
  };
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

  // const bubbleChartOptions = {
  //     chart: {
  //         type: 'bubble',
  //         zoom: {
  //             enabled: false,
  //             type: 'x',
  //             autoScaleYaxis: true,
  //             zoomedArea: {
  //             fill: {
  //                     color: '#90CAF9',
  //                 opacity: 0.4
  //             },
  //             stroke: {
  //                 color: '#0D47A1',
  //                 opacity: 0.4,
  //                 width: 1
  //             },
  //             }
  //         }
  //     },
  //     dataLabels: {
  //         enabled: false,
  //     },
  //     colors: ['white', '#008FFB', '#00E396', '#FEB019', '#A65FEC', 'white'],
  //     xaxis: {
  //         type: 'numeric',
  //         title: {
  //         forceNiceScale: false,
  //         min: 0,
  //         max: 15,
  //         },
  //     },
  //     yaxis: {
  //     },
  //     };

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
                    paginationModel: { page: 0, pageSize: 15},
                },
                }}
                sx ={{height:"55%", fontSize: "1.5vh", fontWeight: 550}}
                getRowHeight={() => 'auto'}
                onRowClick={handleEvent}
                getRowClassName={(params) =>
                  params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
                }
                />
            </Box>
    );
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
