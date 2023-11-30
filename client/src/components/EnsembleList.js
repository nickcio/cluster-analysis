import React from 'react';
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

import { Link } from 'react-router-dom';

const EnsembleList = () => {
  const ensembles = [
    { name: 'Ensemble 1', state: 'Arizona', details: '/ensemble1/details', distance: '/ensemble1/distance', info: {numberOfClusters: "N/A", numberOfDP: "N/A", clusterVariance: "N/A"}},
    { name: 'Ensemble 2', state: 'Arizona', details: '/ensemble2/details', distance: '/ensemble2/distance', info: {numberOfClusters: "N/A", numberOfDP: "N/A", clusterVariance: "N/A"}},
    { name: 'Ensemble 3', state: 'Arizona', details: '/ensemble5/details', distance: '/ensemble5/distance', info: {numberOfClusters: "N/A", numberOfDP: "N/A", clusterVariance: "N/A"}},
  ];

  console.log("RERENDERING ENSEMBLE LIST");
  return (
    <List component="nav" aria-label="ensemble options" sx={{ width: '100%' }}>
        {ensembles.map((ensemble, index) => (
            <React.Fragment key={ensemble.name}>
            <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ListItemText primary={ensemble.name} />
                <Box>
                <Button component={Link} to={`/state/${ensemble.state}/ensemble/${index}`} variant="outlined" sx={{ marginRight: '8px' }}>
                    Ensemble Details
                </Button>
                <Button variant="outlined" href={ensemble.distance}>
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
                <Table sx={{ minWidth: 650 }} aria-label="ensemble summary table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Number of Clusters</TableCell>
                        <TableCell align="center">Number of District Plans</TableCell>
                        <TableCell align="center">Cluster Variance</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        key={ensemble.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center">{ensemble.info.numberOfClusters}</TableCell>
                        <TableCell align="center">{ensemble.info.numberOfDP}</TableCell>
                        <TableCell align="center">{ensemble.info.clusterVariance}</TableCell>
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
  );
};

export default EnsembleList;
