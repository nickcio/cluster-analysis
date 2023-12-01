import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate, useLocation } from 'react-router-dom';

const ClusterTable = ({ data }) => {
      const navigate = useNavigate();
      const location = useLocation();

      const columns = [
        { field: 'id', headerName: 'ID', width: 70, headerAlign: 'left', align: 'left' },
        { field: 'average_distance', headerName: 'Avg Distance', width: 95, headerAlign: 'left', align: 'left' },
        { field: 'average_opportunity_districts', headerName: 'Avg Opportunity Districts', type: 'number', width: 95, headerAlign: 'left', align: 'left' },
        { field: 'average_plan', headerName: 'Avg Plan', type: 'number', width: 95, headerAlign: 'left', align: 'left' },
        { field: 'average_rep_split', headerName: 'Rep Split', type: 'number', width: 95, headerAlign: 'left', align: 'left' },
        { field: 'average_dem_split', headerName: 'Dem Split', type: 'number', width: 95, headerAlign: 'left', align: 'left' },
        { field: 'num_district_plans', headerName: 'Number District Plans', type: 'string', width: 95, headerAlign: 'left', align: 'left' },
      ];

      function handleClick(e) {
        console.log("the cluster id",e.row.id);
        navigate(`${location.pathname}/cluster/${e.row.id}`);
      }
    
      return (
        <div style={{ height: 570, width: '46%', position:'fixed', top:'60%', left:'53%'}}>
          <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 11},
                },
                }}
                sx ={{height:"55%", fontSize: "1.5vh", fontWeight: 550}}
                getRowHeight={() => 'auto'}
                onRowClick={handleClick}
                getRowClassName={(params) =>
                  params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
                }
                />
        </div>
      )
};

export default ClusterTable;