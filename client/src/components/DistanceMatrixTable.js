import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DistanceMatrix = ({distanceData }) => {
    const columns = distanceData.length > 0 ? 
        Object.keys(distanceData[0]).map((key) => ({
            field: key,
            headerName: key.replace(/([A-Z])/g, ' $1').trim(), 
            type: 'number',
            width: '65'
        })) : [];

    const rows = distanceData.map((district, index) => ({
        id: index,
        ...district
    }));

    return (
        <div style={{ height: '95%', width: '50%' }}>
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
              
        </div>
    );
};

export default DistanceMatrix;
