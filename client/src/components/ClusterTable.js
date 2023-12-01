import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const ClusterTable = ({ data }) => {

      const columns = [
        { field: 'id', headerName: 'ID', width: 70, headerAlign: 'left', align: 'left' },
        { field: 'average_distance', headerName: 'Avg Distance', width: 110, headerAlign: 'left', align: 'left' },
        { field: 'average_opportunity_districts', headerName: 'Avg Opportunity Districts', type: 'number', width: 110, headerAlign: 'left', align: 'left' },
        { field: 'average_plan', headerName: 'Avg Plan', type: 'number', width: 110, headerAlign: 'left', align: 'left' },
        { field: 'average_rep_dem_split', headerName: 'Avg R/D Split', type: 'number', width: 110, headerAlign: 'left', align: 'left' },
        { field: 'num_district_plans', headerName: 'Number District Plans', type: 'string', width: 110, headerAlign: 'left', align: 'left' },
      ];

      function handleClick(e) {
        console.log(e.row.name);
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