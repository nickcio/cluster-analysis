import { GlobalStoreContext } from "../store";
import { useContext, useState } from "react";
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
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Info for the Optimal Transport Distance

const columns = [
  { field: "id", headerName: "Cluster #", width: 70 },
  {
    field: "D1",
    headerName: "To D1",
    type: "number",
    width: 70,
  },
  {
    field: "D2",
    headerName: "To D2",
    type: "number",
    width: 70,
  },
  {
    field: "D3",
    headerName: "To D3",
    type: "number",
    width: 60,
  },
  {
    field: "D4",
    headerName: "To D4",
    type: "number",
    width: 60,
  },
  {
    field: "D5",
    headerName: "To D5",
    type: "number",
    width: 60,
  },
  {
    field: "D6",
    headerName: "To D6",
    type: "number",
    width: 60,
  },
  {
    field: "D7",
    headerName: "To D7",
    type: "number",
    width: 60,
  },
  {
    field: "D8",
    headerName: "To D8",
    type: "number",
    width: 60,
  },
  {
    field: "D9",
    headerName: "To D9",
    type: "number",
    width: 60,
  },
  {
    field: "D10",
    headerName: "To D10",
    type: "number",
    width: 60,
  },
  {
    field: "D11",
    headerName: "To D11",
    type: "number",
    width: 60,
  },
  {
    field: "D12",
    headerName: "To D12",
    type: "number",
    width: 60,
  },
  {
    field: "D13",
    headerName: "To D13",
    type: "number",
    width: 60,
  },
  {
    field: "D14",
    headerName: "To D14",
    type: "number",
    width: 60,
  },
  {
    field: "D15",
    headerName: "To D15",
    type: "number",
    width: 60,
  },
  {
    field: "D16",
    headerName: "To D16",
    type: "number",
    width: 60,
  },
];

const rows = [];

for (let i = 0; i < 25; i++) {
  let D1 = Math.random();
  let D2 = Math.random();
  let D3 = Math.random();
  let D4 = Math.random();
  let D5 = Math.random();
  let D6 = Math.random();
  let D7 = Math.random();
  let D8 = Math.random();
  let D9 = Math.random();
  let D10 = Math.random();
  let D11 = Math.random();
  let D12 = Math.random();
  let D13 = Math.random();
  let D14 = Math.random();
  let D15 = Math.random();
  let D16 = Math.random();

  let row = {
    id: String(i + 1),
    D1: D1,
    D2: D2,
    D3: D3,
    D4: D4,
    D5: D5,
    D6: D6,
    D7: D7,
    D8: D8,
    D9: D9,
    D10: D10,
    D11: D11,
    D12: D12,
    D13: D13,
    D14: D14,
    D15: D15,
    D16: D16,
  };
  rows.push(row);
}

// Info for the Sum of Squares Metric

const columns2 = [
  { field: "id", headerName: "Cluster #", width: 70 },
  {
    field: "D1",
    headerName: "D1",
    type: "number",
    width: 70,
  },
  {
    field: "D2",
    headerName: "D2",
    type: "number",
    width: 70,
  },
  {
    field: "D3",
    headerName: "D3",
    type: "number",
    width: 60,
  },
  {
    field: "D4",
    headerName: "D4",
    type: "number",
    width: 60,
  },
  {
    field: "D5",
    headerName: "D5",
    type: "number",
    width: 60,
  },
  {
    field: "D6",
    headerName: "D6",
    type: "number",
    width: 60,
  },
  {
    field: "D7",
    headerName: "D7",
    type: "number",
    width: 60,
  },
  {
    field: "D8",
    headerName: "D8",
    type: "number",
    width: 60,
  },
  {
    field: "D9",
    headerName: "D9",
    type: "number",
    width: 60,
  },
  {
    field: "D10",
    headerName: "D10",
    type: "number",
    width: 60,
  },
  {
    field: "D11",
    headerName: "D11",
    type: "number",
    width: 60,
  },
  {
    field: "D12",
    headerName: "D12",
    type: "number",
    width: 60,
  },
  {
    field: "D13",
    headerName: "D13",
    type: "number",
    width: 60,
  },
  {
    field: "D14",
    headerName: "D14",
    type: "number",
    width: 60,
  },
  {
    field: "D15",
    headerName: "D15",
    type: "number",
    width: 60,
  },
  {
    field: "D16",
    headerName: "D16",
    type: "number",
    width: 60,
  },
];

const rows2 = [];

for (let i = 0; i < 25; i++) {
  let D1 = Math.random();
  let D2 = Math.random();
  let D3 = Math.random();
  let D4 = Math.random();
  let D5 = Math.random();
  let D6 = Math.random();
  let D7 = Math.random();
  let D8 = Math.random();
  let D9 = Math.random();
  let D10 = Math.random();
  let D11 = Math.random();
  let D12 = Math.random();
  let D13 = Math.random();
  let D14 = Math.random();
  let D15 = Math.random();
  let D16 = Math.random();

  let row2 = {
    id: String(i + 1),
    D1: D1,
    D2: D2,
    D3: D3,
    D4: D4,
    D5: D5,
    D6: D6,
    D7: D7,
    D8: D8,
    D9: D9,
    D10: D10,
    D11: D11,
    D12: D12,
    D13: D13,
    D14: D14,
    D15: D15,
    D16: D16,
  };
  rows2.push(row2);
}

export default function DistanceMeasure() {
  return (
    <Box sx={{ bgcolor: "white" }} style={{ width: "50vw", height: "85vh" }}>
      <Box>
        <Typography variant="h5" fontWeight="bold" sx={{ bgcolor: "#33586f", color: "white" }} style={{ height: "4vh",  display: "flex", alignItems: "center", justifyContent: "center"}}>
          Optimal Transport Distance
        </Typography>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 11 },
          },
        }}
        sx={{ height: "38.5vh", fontSize: "1.5vh", fontWeight: 550 }}
        getRowHeight={() => "auto"}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
        }
      />
      <Box>
        <Typography variant="h5" fontWeight="bold" sx={{ bgcolor: "#33586f", color: "white" }} style={{ height: "4vh",  display: "flex", alignItems: "center", justifyContent: "center"}}>
          Sum of Squares Metric
        </Typography>
      </Box>
      <DataGrid
        rows={rows2}
        columns={columns2}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 11 },
          },
        }}
        sx={{ height: "38.5vh", fontSize: "1.5vh", fontWeight: 550 }}
        getRowHeight={() => "auto"}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
        }
      />
    </Box>
  );
}
