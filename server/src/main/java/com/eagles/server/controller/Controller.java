package com.eagles.server.controller;

import com.eagles.server.model.DistrictPlan;
import com.eagles.server.service.DistrictPlanService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import com.eagles.server.model.Ensemble;
import com.eagles.server.service.EnsembleService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class Controller {
    private final DistrictPlanService districtPlanService;
    private final EnsembleService ensembleService;

    public Controller(DistrictPlanService districtPlanService, EnsembleService ensembleService) {
        this.districtPlanService = districtPlanService;
        this.ensembleService = ensembleService;
    }

    @GetMapping("/thisIsATestGetRequest")
    public String getSomething() {
        log.info("Hello World!!!!");
        log.info("Hello World 2!!!");
        return "Hello World!!!!";
    }

    @PostMapping("/thisIsATestPostRequest")
    public DistrictPlan postSomething(@RequestBody DistrictPlan plan) {
        log.info("Goodbye World!!!!");
        log.info(plan.toString());
        return districtPlanService.saveDistrictPlan(plan);
    }

    @GetMapping("/thisIsATest")
    public String testMethod() {
        return "Testing";
    }

//    @GetMapping("/retrieveEnsembles")
//    public List<Ensemble> retrieveEnsembles() {
//        log.info("Retrieving ensembles");
//        return ensembleService.getAllEnsembles();
//    }


    @GetMapping("/retrieveEnsembles")
    public List<Ensemble> retrieveEnsembles(@RequestParam(name = "state", required = false) String state) {
        log.info("Retrieving ensembles for state: {}", state);
        return ensembleService.getEnsemblesByState(state);
    }


}
