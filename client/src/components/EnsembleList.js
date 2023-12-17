import React, { useState, useEffect, useParams} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StateSelectBanner from "./StateSelection"

import { Link } from 'react-router-dom';

const EnsembleList = ({ stateId, ensembles }) => {

  console.log("Ensembles in ENSEMBLE LIST COMPONENET", ensembles)
  return (
    <Box sx={{ height: '83vh', overflowY: 'auto' }}>
    <List component="nav" aria-label="ensemble options" sx={{ width: '100%' }}>
        {ensembles.map((ensemble, index) => (
            <React.Fragment key={"Ensemble " + ensemble.id}>
            <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ListItemText primary={"Ensemble " + ensemble.id} />
                <Box>
                <Button component={Link} to={`/state/${stateId}/ensemble/${ensemble.backendId}`} variant="outlined" sx={{ marginRight: '8px' }}>
                    Ensemble Details
                </Button>
                <Button component={Link} to={`/state/${stateId}/ensemble/${index + 1}/distance`} variant="outlined">
                    Distance Details
                </Button>
                </Box>
            </ListItem>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Summary</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450 }} aria-label="ensemble summary table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Number of Clusters</TableCell>
                        <TableCell align="center">Number of District Plans</TableCell>
                        <TableCell align="center">Avg. Euclidean Distance</TableCell>
                        <TableCell align="center">Avg. Hamming Distance</TableCell>
                        <TableCell align="center">Avg. Optimal Transport</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        key={ensemble.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center">{ensemble.num_clusters}</TableCell>
                        <TableCell align="center">{ensemble.num_district_plans}</TableCell>
                        <TableCell align="center">{ensemble.avg_euclidean_distance.toFixed(3)}</TableCell>
                        <TableCell align="center">{ensemble.hamming_distance.toFixed(3)}</TableCell>
                        <TableCell align="center">{ensemble.optimal_transport_distance.toFixed(3)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="ensemble summary table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Avg. Dem Votes %</TableCell>
                        <TableCell align="center">Avg. Rep Votes %</TableCell>
                        <TableCell align="center">Avg. Margin of Victory</TableCell>
                        <TableCell align="center">Avg. Oppurunity Districts</TableCell>
                        <TableCell align="center">Avg. Population Margin</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        key={ensemble.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center">{ensemble.dem_votes_percent.toFixed(3)}</TableCell>
                        <TableCell align="center">{ensemble.average_rep_votes_percent.toFixed(3)}</TableCell>
                        <TableCell align="center">{ensemble.margin_of_victory.toFixed(3)}</TableCell>
                        <TableCell align="center">{ensemble.opportunity_districts.toFixed(3)}</TableCell>
                        <TableCell align="center">{ensemble.population_margin.toFixed(3)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
                </AccordionDetails>
            </Accordion>
            {index < ensembles.length - 1 && <Divider />}
            </React.Fragment>
        ))}
        </List>
    </Box>
  );
};

export default EnsembleList;
