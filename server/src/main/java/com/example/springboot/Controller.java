package com.example.springboot;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping; // For handling POST requests
import org.springframework.web.bind.annotation.PutMapping; // For handling PUT requests
import org.springframework.web.bind.annotation.DeleteMapping; // For handling DELETE requests
import org.springframework.web.bind.annotation.RequestMapping; // For defining request mapping
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;

@RestController
public class Controller {


    @GetMapping("/data")
    public String index() {
        String test = "Testing this here";
        return test;
    }

    @GetMapping("/api/data")
    public ResponseEntity<String> getData() {
        String data = "Sever Message. Go Eagles";
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON)
                .body(data); // OK (200) status code
    }

}