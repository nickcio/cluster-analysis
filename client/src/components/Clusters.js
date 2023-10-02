// import React, { useContext, useState } from 'react'
// import { GlobalStoreContext } from '../store'

// import ReactApexChart from 'react-apexcharts';
// import {Box, List, ListItem, TextField, Table, TableBody, TableCell, TableContainer, TableHead,
//         TableRow, Paper} from '@mui/material/';
// //import { DataGrid } from '@mui/x-data-grid';


// const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 90,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       valueGetter: (params) =>
//         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//   ];
  
//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];

// export default function Clusters() {


//     /*
//        Here we make the table for the cluster data with the scatter plot above where when we open it opns the individualized district
//        plans within the cluster

//        Makes different clusters based off the ensemble that it is in

//        Make a bubble graph first of the different plans, Make the table for different values we need

//        Table includes:
// 		Republicans'/Democratic splits
// 		Percentage of Republican Voters
// 		Percentage of Democratic Voters,
// 		Percentage of Demographic groups,
// 		Etc
//     */

//     const bubbleChartOptions = {
//         chart: {
//             type: 'bubble',
//             zoom: {
//                 enabled: true,
//                 type: 'x',
//                 autoScaleYaxis: true,  
//                 zoomedArea: {
//                 fill: {
//                         color: '#90CAF9',
//                     opacity: 0.4
//                 },
//                 stroke: {
//                     color: '#0D47A1',
//                     opacity: 0.4,
//                     width: 1
//                 }
//                 }
//             }
//         },
//         dataLabels: {
//             enabled: false,
//         },
//         colors: ['#008FFB', '#00E396', '#FEB019'],
//         xaxis: {
//             type: 'numeric',
//             title: {
//             text: 'Distance',
//             },
//         },
//         yaxis: {
//             title: {
//             text: 'State Range',
//             },
//         },
//         };
    
//         const bubbleChartData = [
//         {
//             name: 'Testing the cluster here in Arizona #1',
//             label: 'Arizona Cluster #123132', 
//             data: [
//             { x: 5, y: 15, z: 10 },
//             { x: 12, y: 10, z: 25 },
//             { x: 20, y: 15, z: 10 },
//             ],
//         },
//         {
//             name: 'Testing the cluster here in Arizona #2',
//             data: [
//             { x: 2, y: 10, z: 20 },
//             ],
//         },
//         // Add more series if needed
//         ];


//     return (
//         <Box sx={{bgcolor: "orange"}} style={{width: "100%", height: "100%"}}>
//             <ReactApexChart options={bubbleChartOptions} series={bubbleChartData} type="bubble" height={300} stype = {{width:"100%", height:"100%"}}/>
//             <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 initialState={{
//                 pagination: {
//                     paginationModel: { page: 0, pageSize: 5 },
//                 },
//                 }}
//                 pageSizeOptions={[5, 10]}
//                 checkboxSelection
//             />
            
//         </Box>      
//     )
// }   

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
//             </TableContainer> */