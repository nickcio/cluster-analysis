package com.eagles.server.controller;

import com.eagles.server.model.DistrictPlan;
import com.eagles.server.service.DistrictPlanService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class Controller {
    private final DistrictPlanService districtPlanService;

    public Controller(DistrictPlanService service) {
        this.districtPlanService = service;
    }

    @GetMapping("/thisIsATestGetRequest")
    public String getSomething() {
        log.info("Hello World!!!!");
        return "Hello World!!!!";
    }

    @PostMapping("/thisIsATestPostRequest")
    public DistrictPlan postSomething(@RequestBody DistrictPlan plan) {
        log.info("Goodbye World!!!!");
        log.info(plan.toString());
        return districtPlanService.saveDistrictPlan(plan);
    }
}
