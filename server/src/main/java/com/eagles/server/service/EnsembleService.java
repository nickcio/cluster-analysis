package com.eagles.server.service;


import com.eagles.server.dao.ArizonaEnsembleRepository;
import com.eagles.server.model.ArizonaEnsembles;

import com.eagles.server.dao.SCEnsembleRepository;
import com.eagles.server.model.SCEnsembles;

import com.eagles.server.dao.TexasEnsembleRepository;
import com.eagles.server.model.TexasEnsembles;

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
    private final SCEnsembleRepository SCEnsembleRepo;
    private final TexasEnsembleRepository TexasEnsembleRepo;

    private final ClusterService ClusterService;

    @Autowired
    public EnsembleService(ArizonaEnsembleRepository ArizonaEnsembleRepo, SCEnsembleRepository SCEnsembleRepo,
                           TexasEnsembleRepository TexasEnsembleRepos, ClusterService ClusterService) {
        this.ArizonaEnsembleRepo = ArizonaEnsembleRepo;
        this.SCEnsembleRepo = SCEnsembleRepo;
        this.TexasEnsembleRepo = TexasEnsembleRepos;
        this.ClusterService = ClusterService;
    }

    public List<ArizonaEnsembles> getAllArizonaEnsemble() {
        return ArizonaEnsembleRepo.findAll();
    }
    public List<SCEnsembles> getAllSCEnsemble() {
        return SCEnsembleRepo.findAll();
    }
    public List<TexasEnsembles> getAllTexasEnsemble() {
        return TexasEnsembleRepo.findAll();
    }



    //Here we can find all the shit for the different states when a state is passed in
    public List<Object> getEnsemblesByState(String state) {
        switch (state)
        {
            case "Arizona":
                return new ArrayList<Object>(getAllArizonaEnsemble());

            case "SC":
                return new ArrayList<Object>(getAllSCEnsemble());

            case "Texas":
                return new ArrayList<Object>(getAllTexasEnsemble());

            default:
                return new ArrayList<Object>();
        }




//        if (Objects.equals(state, "Arizona")) {
//            // Implement the logic to filter ensembles by state
//            // This could involve calling a custom method in your repository that finds ensembles by state
//            return new ArrayList<Object>(getAllArizonaEnsemble());
//        } else {
//            // If no state is provided, return all ensembles
//            return new ArrayList<Object>();
//        }
    }

    public List<Object>getEnsembleClusters(String state, String ensembleId){

        switch (state)
        {
            case "Arizona":
                Optional<ArizonaEnsembles> AZcurrentEnsemb = ArizonaEnsembleRepo.findById(ensembleId);
                Optional<List<String>> AZclustersOptional = AZcurrentEnsemb.map(ArizonaEnsembles::getClusters);
                log.info("I worked here in AZEnsembleClusters" + AZclustersOptional.get());
                return ClusterService.getAllClustersByStateAndId(state, AZclustersOptional);
            case "SC":
                Optional<SCEnsembles> SCcurrentEnsemb = SCEnsembleRepo.findById(ensembleId);
                Optional<List<String>> SCclustersOptional = SCcurrentEnsemb.map(SCEnsembles::getClusters);
                log.info("I worked here in SCEnsembleClusters" + SCclustersOptional.get());
                return ClusterService.getAllClustersByStateAndId(state, SCclustersOptional);

            case "Texas":
                Optional<TexasEnsembles> TXcurrentEnsemb = TexasEnsembleRepo.findById(ensembleId);
                Optional<List<String>> TXclustersOptional = TXcurrentEnsemb.map(TexasEnsembles::getClusters);
                log.info("I worked here in EnsembleClusters" + TXclustersOptional.get());
                return ClusterService.getAllClustersByStateAndId(state, TXclustersOptional);

            default:
                return new ArrayList<Object>();
        }



//        if(Objects.equals(state, "Arizona")){
//            Optional<ArizonaEnsembles> currentEnsemb = ArizonaEnsembleRepo.findById(ensembleId);
//            Optional<List<String>> clustersOptional = currentEnsemb.map(ArizonaEnsembles::getClusters);
//            log.info("I worked here in EnsembleClusters" + clustersOptional.get());
//            return ClusterService.getAllClustersByStateAndId(state, clustersOptional);
//        }
//        return new ArrayList<>();
    }
}

