import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const ClusterTable = ({ data }) => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100, height: 20},
        { field: 'name', headerName: 'Cluster Name', width: 100, height: 20},
        { field: 'percentDemocratic', headerName: '% Dem', type: 'number', width: 100, height: 20},
        { field: 'percentRepublican', headerName: '% Rep', type: 'number', width: 100, height: 20},
        { field: 'clusterSize', headerName: 'Cluster Size', type: 'number', width: 100, height: 20},
        { field: 'otherPercentage', headerName: 'Other Percentage', type: 'number', width: 100, height: 20},
      ];

      function handleClick(e) {
        console.log(e.row.name);
      }
    
      return (
        <div style={{ height: 570, width: '46%', position:'fixed', top:500, left:755}}>
          <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 15},
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