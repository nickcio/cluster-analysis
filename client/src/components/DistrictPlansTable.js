import React, { useState, useEffect, useContext} from 'react';
import { GlobalStoreContext } from "../store";
import { useParams, Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogTitle, DialogContent, Box} from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DistrictPlanMap from './DistrictPlanMap';
import state_borders from './geojson/state-borders.json';
import AZDistricts from "./geojson/AZDistricts.json";
import SCDistricts from "./geojson/SCDistricts.json";
import TXDistricts from "./geojson/TXDistricts.json";

import proj4 from 'proj4';

const DistrictPlansTable = ({ data}) => {
    const { store } = useContext(GlobalStoreContext);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [expandedRowId, setExpandedRowId] = useState(null);
    let {stateId} = useParams();
    const [currentGeoJson, setGeojson] = useState({});
    const [averagePlanInfo, setAveragePlanInfo] = useState(null);

    useEffect(() => {
        let geojson = {};
        if (stateId === "Arizona") {
            geojson = AZDistricts;
        } else if (stateId === "SC") {
            geojson = SCDistricts;
        } else if (stateId === "Texas") {
            geojson = TXDistricts;
        }
        setGeojson(geojson);
    }, [stateId]);


    function find_current_geoJson(){
        let geojson = {};
        if (stateId === "Arizona") {
            geojson = AZDistricts;
        } else if (stateId === "SC") {
            geojson = SCDistricts;
        } else if (stateId === "Texas") {
            geojson = TXDistricts;
        }
        return geojson;
    };

    const sourceProjection = 'EPSG:3857';
    const destinationProjection = 'EPSG:4326'; 
    const convertCoordinates = (featureCollection, sourceProjection, destinationProjection) => {
        if (!featureCollection || !Array.isArray(featureCollection.features)) {
            throw new Error('Invalid GeoJSON data');
        }
    
        featureCollection.features.forEach((feature) => {
            if (!feature.geometry || !Array.isArray(feature.geometry.coordinates)) {
                throw new Error('Invalid geometry in GeoJSON feature');
            }
    
            if (feature.geometry.type === 'Polygon') {
                feature.geometry.coordinates = feature.geometry.coordinates.map(ring => {
                    return ring.map(coords => {
                        return proj4(sourceProjection, destinationProjection, coords);
                    });
                });
            } else if (feature.geometry.type === 'MultiPolygon') {
                feature.geometry.coordinates = feature.geometry.coordinates.map(polygon => {
                    return polygon.map(ring => {
                        return ring.map(coords => {
                            return proj4(sourceProjection, destinationProjection, coords);
                        });
                    });
                });
            }
        });
    
        return featureCollection;
    };

    const columns = [
        { field: 'id', headerName: 'District Plans', width: 90, type: 'number', align: 'center', headerAlign: 'center'},
        { field: 'availability', headerName: 'Availability', width: 90, type: 'boolean', align: 'center' , headerAlign: 'center'},
        { field: 'dem_percentages', headerName: 'Dem %', width: 100, type: 'number' , align: 'center', headerAlign: 'center'},
        { field: 'rep_percentages', headerName: 'Rep. %', width: 100, type: 'number' , align: 'center', headerAlign: 'center'},
        { field: 'rep_dem_splits', headerName: 'Dem : Rep Split', width: 140, type: 'String' , align: 'center', headerAlign: 'center'}
    ];  

    const district_info_columns = [
        { field: 'id', headerName: 'District', width: 50, type: 'number' , align: 'center' , headerAlign: 'center'},
        { field: 'area_data', headerName: 'Area Data', width: 120, type: 'number', align: 'center', headerAlign: 'center' },
        { field: 'dem_percentages', headerName: 'Dem %', width: 90, type: 'number' , align: 'center', headerAlign: 'center'},
        { field: 'rep_percentages', headerName: 'Rep. %', width: 90, type: 'number' , align: 'center', headerAlign: 'center'},
        { field: 'district_winner', headerName: 'District Winner(s)', width: 170, type: 'String', align: 'center', headerAlign: 'center'},
        { field: 'opportunity_districts', headerName: 'Opportunity Districts', width: 90, type: 'boolean' , align: 'center', headerAlign: 'center'},
        { field: 'pop_white', headerName: 'White Population', width: 90, type: 'number', align: 'center', headerAlign: 'center' },
        { field: 'pop_asian', headerName: 'Asian Population', width: 90, type: 'number', align: 'center' , headerAlign: 'center'},
        { field: 'pop_black', headerName: 'Black Population', width: 90, type: 'number', align: 'center' , headerAlign: 'center'},
        { field: 'pop_hisp', headerName: 'Hispanic Population', width: 90, type: 'number', align: 'center' , headerAlign: 'center'},
        { field: 'pop_other', headerName: 'Other Population', width: 90, type: 'number' , align: 'center', headerAlign: 'center'},
    ];  

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
      };
    
      const handleCloseDialog = () => {
        setIsDialogOpen(false);

      };

    const handleClick = (params) => {
        setExpandedRowId(params.id);
        console.log("the availability", data[params.id - 1].availability, params.id, data[params.id - 1].geojson_id,);
        if (data[params.id - 1].geojson_id !== "0") {
            console.log("handling click", data, expandedRowId, data[expandedRowId], data[params.id - 1].geojson_id);
            console.log('http://localhost:8080/geo?state=' + stateId + '&geoJson_id=' + data[params.id - 1].geojson_id)
            fetch('http://localhost:8080/geo?state=' + stateId + '&geoJson_id=' + data[params.id - 1].geojson_id)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    let convertedData = '0';
                    console.log("Data:", data);
                    if(Array.isArray(data) && data[0] && data[0].geoJson){
                        console.log("data received from fetch: ", data[0].geoJson);
                        convertedData = convertCoordinates(data[0].geoJson, sourceProjection, destinationProjection);
                        setGeojson(convertedData);  
                    } else {
                        setGeojson(find_current_geoJson());
                    }
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        }
    };

    const handleAveragePlan = () => {
        fetch('http://localhost:8080/averagePlan?state='+ stateId + '&averagePlan=' + store.averagePlan)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                let convertedData = '0';
                console.log("Data:", data);
                if(Array.isArray(data) && data[0] && data[0].geoJson){
                    console.log("data received from fetch: ", data[0].geoJson);
                    convertedData = convertCoordinates(data[0].geoJson, sourceProjection, destinationProjection);
                    setGeojson(convertedData);  
                } else {
                    setGeojson(find_current_geoJson());
                }
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });

        console.log('http://localhost:8080/retrieveDistrictPlan?state=' + stateId + '&district_id=' + store.averagePlan);
        fetch('http://localhost:8080/retrieveDistrictPlan?state=' + stateId + '&district_id=' + store.averagePlan)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setAveragePlanInfo(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
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
                        sx={{ height: 275, width: '48%' }}
                        initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 8 },
                        },
                        }}
                        getRowHeight={() => 'auto'}
                        onRowClick={handleClick}
                    />
                    <Box sx={{marginRight:'5%', width: '45%', height:'20vh', zIndex:'0'}}>
                        <DistrictPlanMap geoJsonData={currentGeoJson} center={[34.212, -111.929]} />
                        
                    </Box>
                </Box>
                <Button sx={{fontSize:'1.8vh', height:'3vh', marginLeft:'55vh'}} onClick={handleAveragePlan}> Click to display average plan
                </Button> 
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
