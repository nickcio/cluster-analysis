package com.eagles.server.controller;

import com.eagles.server.model.Cluster;
import com.eagles.server.model.DistrictPlan;
import com.eagles.server.service.ClusterService;
import com.eagles.server.service.DistrictPlanService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
//import com.eagles.server.model.Ensemble;
import com.eagles.server.service.EnsembleService;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class Controller {
    private final DistrictPlanService districtPlanService;
    private final EnsembleService ensembleService;
    private final ClusterService clusterService;


    public Controller(DistrictPlanService districtPlanService, EnsembleService ensembleService, ClusterService clusterService) {
        this.districtPlanService = districtPlanService;
        this.ensembleService = ensembleService;
        this.clusterService = clusterService;
    }
    @GetMapping("/retrieveEnsembles")
    public List<Object> retrieveEnsembles(@RequestParam(name = "state", required = false) String state) {
        //log.info("Retrieving ensembles for state: {}", state);
        return ensembleService.getEnsemblesByState(state);
    }
    @GetMapping("/retrieveClusters")
    public List<Object> retrieveCluster(@RequestParam(name = "state", required = false) String state, @RequestParam(name = "ensemble_id", required = false) String ensemble_id) {
        log.info("Retrieving cluster info; state:", state, " esemble_id: ", ensemble_id);
        return ensembleService.getEnsembleClusters(state, ensemble_id);
    }
    @GetMapping("/retrievePlans")
    public List<DistrictPlan> retrievePlans(@RequestParam(name = "state", required = false) String state,
                                            @RequestParam(name = "ensemble_id", required = false) Integer ensemble_id,
                                            @RequestParam(name = "cluster_id", required = false) Integer cluster_id) {
        //log.info("Retrieving district plan info; state:", state, " esemble_id: ", ensemble_id, " cluster_id: ", cluster_id);
        return districtPlanService.getDistrictBy(state,ensemble_id,cluster_id);
    }
}





















/*
    @GetMapping("/thisIsATestGetRequest")
    public String getSomething() {
        log.info("Hello World!!!!");
        log.info("Hello World 2!!!");
        return "Hello World!!!!";
    }

    @GetMapping("/thisIsATest")
    public String testMethod() {
        return "Testing";
    }
 */