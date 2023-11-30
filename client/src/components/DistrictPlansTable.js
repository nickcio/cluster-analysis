import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DistrictPlansTable = ({ data }) => {
    const columns = [
        { field: 'District Plan', headerName: 'District Plan', width: 70, height: 20 },
        { field: 'Voting Age Pop.', headerName: 'Voting Age Pop.', width: 100, height: 20, type: 'number' },
        { field: 'African-American Pop.', headerName: 'African-American Pop.', width: 100, height: 20, type: 'number' },
        { field: 'Size (km2)', headerName: 'Size (km²)', width: 100, height: 20, type: 'number' },
        { field: 'Pop. Density', headerName: 'Pop. Density', width: 100, height: 20, type: 'number' },
        { field: 'Avg. Income USD', headerName: 'Avg. Income USD', width: 100, height: 20, type: 'number' },
        { field: 'Availabity', headerName: 'Availability', width: 70, height: 20, type: 'number' }
    ];

    function handleClick(e) {
        console.log(`District Plan ${e.row['District Plan']}`);
    }

    return (
        <div style={{ height: 530, width: '46%', position:'fixed', top:485, left:755 }}>
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
