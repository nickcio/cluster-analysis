import React, { Component } from 'react';
import {Box, Button} from "@mui/material";
class ServerTest extends Component {

  constructor() {
    super();
    this.state = {
      string: "Nothing"
    };
  }
fetchDataFromBackend = () => {
  // Define the URL of your Spring Boot backend
  const backendUrl = 'http://localhost:8080/api/data';

  // Make a GET request to the backend
  fetch(backendUrl) // Replace with your backend URL
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return response.text(); // Parse the response as JSON
    })
    .then((data) => {
        // Handle the JSON data
        this.setState({string:data})
        console.log('Data from backend:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};

render() {
  return (
    <Box>
      <Button onClick={this.fetchDataFromBackend}>Fetch Data from Backend</Button>
      <p>{this.state.string}</p>
    </Box>
  );
}
}


export default ServerTest;