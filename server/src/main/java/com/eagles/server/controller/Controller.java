package com.eagles.server.controller;

import com.eagles.server.model.Cluster;
import com.eagles.server.model.DistrictPlan;
import com.eagles.server.service.ClusterService;
import com.eagles.server.service.DistrictPlanService;
import com.eagles.server.service.geoJsonService;
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
    private final geoJsonService geoJsonService;


    public Controller(DistrictPlanService districtPlanService, EnsembleService ensembleService,
                      ClusterService clusterService,geoJsonService geoJsonService) {
        this.districtPlanService = districtPlanService;
        this.ensembleService = ensembleService;
        this.clusterService = clusterService;
        this.geoJsonService = geoJsonService;
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
    public List<Object> retrievePlans(@RequestParam(name = "state", required = false) String state,
                                            @RequestParam(name = "cluster_id", required = false) String cluster_id) {
        //log.info("Retrieving district plan info; state:", state, " cluster_id: ", cluster_id);
        return clusterService.getClusterPlansByStateAndId(state,cluster_id);
    }

    @GetMapping("/geo")
    public List<Object> retrieveGeo(@RequestParam(name = "state", required = false) String state,
                                    @RequestParam(name = "geoJson_id", required = false) String geoJson_id) {
        //log.info("Retrieving district plan info; state:", state, " cluster_id: ", cluster_id);
        return geoJsonService.getGeoJsonByStateAndId(state, geoJson_id);
    }

    @GetMapping("/averagePlan")
    public List<Object> retrieveAveragePlan(@RequestParam(name = "state", required = false) String state,
                                    @RequestParam(name = "averagePlan", required = false) String averagePlan) {
        //log.info("Retrieving district plan info; state:", state, " cluster_id: ", cluster_id);
        return districtPlanService.getGeoByStateandId(state, averagePlan);
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