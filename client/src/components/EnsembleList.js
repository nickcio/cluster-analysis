import React, { useState, useEffect } from 'react';
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

const EnsembleList = () => {
    const [ensembles, setEnsembles] = useState([]);
    let state = "Arizona";

    useEffect(() => {
      fetch('http://localhost:8080/retrieveEnsembles?state=' + state)
        .then(response => response.json())
        .then(data => {
          setEnsembles(data);
        })
        .catch(error => console.error('Error:', error));
    }, []);

  console.log("RERENDERING ENSEMBLE LIST", ensembles);
  ensembles.map((ensemble, index) => (
    console.log(ensemble)
  ));
  return (
    <Box>
    <StateSelectBanner/>
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
                        <TableCell align="center">Avg. Cluster Variance</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        key={ensemble.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center">{ensemble.numberOfClusters}</TableCell>
                        <TableCell align="center">{ensemble.numberOfDP}</TableCell>
                        <TableCell align="center">{ensemble.clusterVariance}</TableCell>
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
