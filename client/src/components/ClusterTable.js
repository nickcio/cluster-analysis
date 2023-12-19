import React, { useState, useContext} from 'react';
import { GlobalStoreContext } from "../store";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';

const ClusterTable = ({ data }) => {
  const { store } = useContext(GlobalStoreContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const columns = [
    { field: 'id', headerName: 'Cluster', width: 70, headerAlign: 'left', align: 'left' },
    { field: 'num_district_plans', headerName: '# District Plans', width: 95, headerAlign: 'left', align: 'left' },
    { field: 'average_euclidean_distance', headerName: 'Avg. Euclidean Distance', type: 'number', width: 95, headerAlign: 'left', align: 'left' },
    { field: 'average_dem_votes_percent', headerName: 'Avg. Dem Votes % / 1', type: 'number', width: 95, headerAlign: 'left', align: 'left' },
    { field: 'average_rep_votes_percent', headerName: 'Avg. Rep Votes % / 1', type: 'number', width: 95, headerAlign: 'left', align: 'left' },
    { field: 'average_margin_of_victory', headerName: 'Avg. Margin of Victory', type: 'number', width: 95, headerAlign: 'left', align: 'left' },
    { field: 'average_opportunity_districts', headerName: 'Avg. Opportunity Districts', type: 'string', width: 95, headerAlign: 'left', align: 'left' },
    { field: 'average_population_margin', headerName: 'Avg. Population Margin', type: 'number', width: 95, headerAlign: 'left', align: 'left' },
    { field: 'pop_white', headerName: 'Pop. White %', type: 'string', width: 95, headerAlign: 'left', align: 'left' },
    { field: 'pop_hisp', headerName: 'Pop. Hispanic %', type: 'number', width: 95, headerAlign: 'left', align: 'left' },
    { field: 'pop_black', headerName: 'Pop. Black %', type: 'string', width: 95, headerAlign: 'left', align: 'left' },
    { field: 'pop_other', headerName: 'Pop. Other %', type: 'string', width: 95, headerAlign: 'left', align: 'left' },
  ];


  function handleClick(e) {
    store.updateAveragePlan(e.row.average_plan);
    navigate(`${location.pathname}/cluster/${e.row.backendId}`);
  }

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div style={{ height: 500, width: '46%', position: 'fixed', top: '60%', left: '53%' }}>
      <DataGrid
        rows={data}
        columns={columns.slice(0, 7)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 11 },
          },
        }}
        sx={{ height: "55%", fontSize: "1.5vh", fontWeight: 550 }}
        getRowHeight={() => 'auto'}
        onRowClick={handleClick}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
        }
      />
      <Button
        onClick={handleOpenDialog}
        variant="outlined"
        sx={{ margin: '10px', fontSize: "1.5vh"}}
      >
        Expand Table
      </Button>
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>Expanded Ensemble Data</DialogTitle>
        <DialogContent>
          <DataGrid
            rows={data}
            columns={columns}
            sx={{ height: 400 }}
            getRowHeight={() => 'auto'}
            onRowClick={handleClick}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClusterTable;

