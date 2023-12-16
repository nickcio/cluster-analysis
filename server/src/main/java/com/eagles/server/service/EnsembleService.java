package com.eagles.server.service;

import com.eagles.server.dao.ArizonaClusterRepository;
import com.eagles.server.dao.ArizonaEnsembleRepository;
//import com.eagles.server.dao.EnsembleRepository;
//import com.eagles.server.model.Ensemble;
import com.eagles.server.model.ArizonaEnsembles;
import com.eagles.server.model.Cluster;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static java.rmi.server.LogStream.log;

@Service
@Slf4j
public class EnsembleService {
    private final ArizonaEnsembleRepository ArizonaEnsembleRepo;
    private final ClusterService ClusterService;

    @Autowired
    public EnsembleService(ArizonaEnsembleRepository ArizonaEnsembleRepo, ClusterService ClusterService) {
        this.ArizonaEnsembleRepo = ArizonaEnsembleRepo;
        this.ClusterService = ClusterService;
    }

    public List<ArizonaEnsembles> getAllArizonaEnsemble() {
        return ArizonaEnsembleRepo.findAll();
    }



    //Here we can find all the shit for the different states when a state is passed in
    public List<Object> getEnsemblesByState(String state) {
        if (Objects.equals(state, "Arizona")) {
            // Implement the logic to filter ensembles by state
            // This could involve calling a custom method in your repository that finds ensembles by state
            return new ArrayList<Object>(getAllArizonaEnsemble());
        } else {
            // If no state is provided, return all ensembles
            return new ArrayList<Object>();
        }
    }

    public List<Object>getEnsembleClusters(String state, String ensembleId){

        if(Objects.equals(state, "Arizona")){
            Optional<ArizonaEnsembles> currentEnsemb = ArizonaEnsembleRepo.findById(ensembleId);
            Optional<List<String>> clustersOptional = currentEnsemb.map(ArizonaEnsembles::getClusters);
            log.info("I worked here " + clustersOptional.get());
            return ClusterService.getAllClustersByStateAndId(state, clustersOptional);
        }
        return new ArrayList<>();
    }
}

