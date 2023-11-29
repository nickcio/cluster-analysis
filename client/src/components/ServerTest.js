import React, { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

export default function ServerTest() {
  const [text, setText] = useState("This is where the get request info will be!")

  const [formData, setFormData] = useState({
    numberOfDistricts: "",
    whitePopulation: "",
    africanAmericanPopulation: "",
    hispanicPopulation: "",
    asianPopulation: "",
    averageIncome: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const testGetRequest = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/thisIsATestGetRequest")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        console.log("Data from the backend: ", data);
        setText("Data from the backend: " + data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const testPostRequest = async (e) => {
    e.preventDefault();
    console.log("FORM DATA ", formData)
    fetch("http://localhost:8080/thisIsATestPostRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <Box style={{ width: "50vw", height: "85vh" }} sx={{ bgcolor: "#e5eef3" }}>
      <Box
        style={{ width: "50vw", height: "85%" }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          component="form"
          onSubmit={testPostRequest}
          style={{ width: "40%", height: "100%" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            bgcolor: "#e6f5fa",
            borderRadius: 10,
          }}
        >
          <TextField
            label="Number of Districts"
            name="numberOfDistricts"
            value={formData.numberOfDistricts}
            onChange={handleFormChange}
            variant="outlined"
          />
          <TextField
            label="White Population"
            name="whitePopulation"
            value={formData.whitePopulation}
            onChange={handleFormChange}
            variant="outlined"
          />
          <TextField
            label="African American Population"
            name="africanAmericanPopulation"
            value={formData.africanAmericanPopulation}
            onChange={handleFormChange}
            variant="outlined"
          />
          <TextField
            label="Hispanic Population"
            name="hispanicPopulation"
            value={formData.hispanicPopulation}
            onChange={handleFormChange}
            variant="outlined"
          />
          <TextField
            label="Asian Population"
            name="asianPopulation"
            value={formData.asianPopulation}
            onChange={handleFormChange}
            variant="outlined"
          />
          <TextField
            label="Average Income"
            name="averageIncome"
            value={formData.averageIncome}
            onChange={handleFormChange}
            variant="outlined"
          />

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>

      <Box
        style={{ width: "50vw", height: "15%" }}
        sx={{
          bgcolor: "#ccdbe3",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button variant="contained" color="primary" onClick={testGetRequest}>
          Click me to test a get request!
        </Button>
        <Box style={{ width: "70%", height: "40%" }} sx={{ borderRadius: 20, bgcolor: "lightgrey", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography variant="h5">{text}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
