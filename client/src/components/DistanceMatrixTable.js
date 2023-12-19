import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const COLUMN_PAGE_SIZE = 20; 

const DistanceMatrix = ({ optimal_transport, nameOfTable }) => {
    const [columnPage, setColumnPage] = useState(0);

    const allColumns = optimal_transport.length > 0 ? 
        Object.keys(optimal_transport[0]).map((key) => ({
            field: key,
            headerName: key.replace(/([A-Z])/g, ' $1').trim(), 
            type: 'number',
            width: 65
        })) : [];

    const visibleColumns = allColumns.slice(
        columnPage * COLUMN_PAGE_SIZE,
        (columnPage + 1) * COLUMN_PAGE_SIZE
    );

    const rows = optimal_transport.map((district, index) => ({
        id: index,
        ...district
    }));

    const handleNextColumns = () => {
        if ((columnPage + 1) * COLUMN_PAGE_SIZE < allColumns.length) {
            setColumnPage(columnPage + 1);
        }
    };

    const handlePreviousColumns = () => {
        if (columnPage > 0) {
            setColumnPage(columnPage - 1);
        }
    };

    return (
        <div style={{ height: '40%', margin:30, marginBottom:35}}>
            {nameOfTable}
            <div style={{ display: 'flex', justifyContent: 'space-between', margiTop:1 }}>
                <Button
                    variant="outlined"
                    onClick={handlePreviousColumns}
                    disabled={columnPage === 0}
                >
                    Previous Columns
                </Button>
                <Button
                    variant="outlined"
                    onClick={handleNextColumns}
                    disabled={(columnPage + 1) * COLUMN_PAGE_SIZE >= allColumns.length}
                >
                    Next Columns
                </Button>
            </div>
            <DataGrid
                rows={rows}
                columns={visibleColumns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 11},
                    },
                }}
                sx={{ height: "100%", fontSize: "1.5vh", fontWeight: 550, marginBottom:20}}
                getRowHeight={() => 'auto'}
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
                }
            />
        </div>
    );
};

export default DistanceMatrix;
