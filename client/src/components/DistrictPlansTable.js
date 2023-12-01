import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DistrictPlansTable = ({ data }) => {
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 50, type: 'number' },
        { field: 'availability', headerName: 'Availability', width: 50, type: 'number' },
        { field: 'area_data', headerName: 'Size (km²)', width: 90, type: 'number' },
        { field: 'dem_percentages', headerName: 'Dem. %', width: 90, type: 'number' },
        { field: 'african_american_pop', headerName: 'African-American Pop.', width: 90, type: 'number' },
        { field: 'white_population', headerName: 'White Population', width: 90, type: 'number' },
        { field: 'hispanic_population', headerName: 'Hispanic Population', width: 90, type: 'number' },
        { field: 'rep_percentages', headerName: 'Rep. %', width: 90, type: 'number' }
    ];    

    function handleClick(e) {
        console.log(`District Plan ${e.row['District Plan']}`);
    }

    return (
        <div style={{ height: 530, width: '46%', position:'fixed', top:'60%', left:'53%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                sx={{ height: "55%", fontSize: "1.5vh", fontWeight: 550 }}
                getRowHeight={() => 'auto'}
                onRowClick={handleClick}
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
                }
            />
        </div>
    )
};

export default DistrictPlansTable;
