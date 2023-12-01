package com.eagles.server.controller;

import com.eagles.server.model.DistrictPlan;
import com.eagles.server.model.Cluster;
//import com.eagles.server.model.Ensemble;
import com.eagles.server.service.DistrictPlanService;
import com.eagles.server.service.ClusterService;
//import com.eagles.server.service.EnsembleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
public class Controller {
    private final DistrictPlanService districtPlanService;
<<<<<<< Updated upstream
    private final ClusterService clusterService;
    //private final EnsembleService testEnsemble;
    public Controller(DistrictPlanService service, ClusterService cService) {
        //, EnsembleService testEnsembles
        this.districtPlanService = service;
        this.clusterService = cService;
=======
    private ClusterService clusterService;
    //private final EnsembleService testEnsemble;
    public Controller(DistrictPlanService service, ClusterService clusterService) {
        //, EnsembleService testEnsembles
        this.districtPlanService = service;
        this.clusterService = clusterService;
>>>>>>> Stashed changes
//        this.testEnsemble = testEnsembles;
    }

    @GetMapping("/thisIsATestGetRequest")
    public String getSomething() {
        log.info("Hello World!!!!");
        log.info("Hello World 2!!!");
        return "Hello World!!!!";
    }


    @GetMapping("/clusterList")
    public List<Cluster> getClusterList() {
<<<<<<< Updated upstream

        return clusterService.getAllClusters();
    }


=======
        List<Cluster> clusters = clusterService.getAllClusters();



        return clusterService.getAllClusters();
    }

//    @GetMapping("/cluster")
//    public Cluster getCluster(int id){
//
//    }
>>>>>>> Stashed changes


    @PostMapping("/thisIsATestPostRequest")
    public DistrictPlan postSomething(@RequestBody DistrictPlan plan) {
        log.info("Goodbye World!!!!");
        log.info(plan.toString());
        return districtPlanService.saveDistrictPlan(plan);
    }
}
