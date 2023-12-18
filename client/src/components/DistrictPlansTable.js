import React, { useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogTitle, DialogContent, Box} from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Map from './Map';

const DistrictPlansTable = ({ data}) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [expandedRowId, setExpandedRowId] = useState(null);

    useEffect(() => {
        var leafletContainers = document.querySelectorAll('.leaflet-container');
        leafletContainers.forEach(function(container) {
        console.log(container);
        container.style.height = '45vh';
        });
    });
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90, type: 'number', align: 'center', headerAlign: 'center'},
        { field: 'availability', headerName: 'Availability', width: 90, type: 'boolean', align: 'center' , headerAlign: 'center'},
        { field: 'dem_percentages', headerName: 'Dem %', width: 100, type: 'number' , align: 'center', headerAlign: 'center'},
        { field: 'rep_percentages', headerName: 'Rep. %', width: 100, type: 'number' , align: 'center', headerAlign: 'center'},
        { field: 'rep_dem_splits', headerName: 'Dem : Rep Split', width: 140, type: 'String' , align: 'center', headerAlign: 'center'}
    ];  

    const district_info_columns = [
        { field: 'id', headerName: 'ID', width: 50, type: 'number' , align: 'center' , headerAlign: 'center'},
        { field: 'area_data', headerName: 'Area Data', width: 120, type: 'number', align: 'center', headerAlign: 'center' },
        { field: 'dem_percentages', headerName: 'Dem %', width: 90, type: 'number' , align: 'center', headerAlign: 'center'},
        { field: 'rep_percentages', headerName: 'Rep. %', width: 90, type: 'number' , align: 'center', headerAlign: 'center'},
        { field: 'district_winner', headerName: 'District Winners', width: 170, type: 'String', align: 'center', headerAlign: 'center'},
        { field: 'opportunity_districts', headerName: 'Opportunity Districts', width: 90, type: 'boolean' , align: 'center', headerAlign: 'center'},
        { field: 'pop_white', headerName: 'Avg. White Population', width: 90, type: 'number', align: 'center', headerAlign: 'center' },
        { field: 'pop_asian', headerName: 'Avg. Asian Population', width: 90, type: 'number', align: 'center' , headerAlign: 'center'},
        { field: 'pop_black', headerName: 'Avg. Black Population', width: 90, type: 'number', align: 'center' , headerAlign: 'center'},
        { field: 'pop_hisp', headerName: 'Avg. Hispanic Population', width: 90, type: 'number', align: 'center' , headerAlign: 'center'},
        { field: 'pop_other', headerName: 'Avg. Other Population', width: 90, type: 'number' , align: 'center', headerAlign: 'center'},
    ];  

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
      };
    
      const handleCloseDialog = () => {
        setIsDialogOpen(false);

      };

    const handleClick = (params) => {
        setExpandedRowId(params.id);
        console.log("handling click", data, expandedRowId, data[expandedRowId],);
    };

    return (
        <div style={{ height: 500, width: '46%', position: 'fixed', top: '60%', left: '53%' }}>
            <DataGrid
                rows={data}
                columns={columns.slice(0, 7)}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 8 },
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
                <DialogTitle>Expanded Cluster Data</DialogTitle>
                <DialogContent>
                <Box sx={{ display: 'flex', width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        sx={{ height: 275, width: '50%' }}
                        initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 8 },
                        },
                        }}
                        getRowHeight={() => 'auto'}
                        onRowClick={handleClick}
                    />
                    <Box sx={{ marginLeft:'5%', marginRight:'5%', width: '45%', height:'20vh', zIndex:'0'}}>
                        <Map />
                    </Box>
                    </Box>
                {expandedRowId != null && (
                    <Accordion expanded={expandedRowId === data.find(row => row.id === expandedRowId).id}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>District Plan {expandedRowId} Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <DataGrid
                                rows={data[expandedRowId - 1].district_object}
                                columns={district_info_columns}
                                initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 8 },
                                },
                                }}
                                sx={{ height: "55%", fontSize: "1.5vh", fontWeight: 550 }}
                                getRowHeight={() => 'auto'}
                                onRowClick={handleClick}
                                getRowClassName={(params) =>
                                params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
                                }
                            />
                    </AccordionDetails>
                    </Accordion>
                )}
                </DialogContent>
            </Dialog>
            </div>
    )
};

export default DistrictPlansTable;
