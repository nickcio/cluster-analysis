import { GlobalStoreContext } from "../store";
import { useContext, useState } from "react";
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



export default function DistanceMeasure() {
    return (
        <Box sx={{bgcolor: "white"}} style={{width: "50vw", height: "85vh"}}>
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