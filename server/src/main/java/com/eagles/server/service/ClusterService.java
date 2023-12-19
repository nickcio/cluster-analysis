package com.eagles.server.service;

import com.eagles.server.dao.ArizonaClusterRepository;
import com.eagles.server.model.ArizonaCluster;

import com.eagles.server.dao.SCClusterRepository;
import com.eagles.server.model.SCCluster;

import com.eagles.server.dao.TexasClusterRepository;
import com.eagles.server.model.TexasCluster;

import com.eagles.server.model.ArizonaEnsembles;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@Slf4j
public class ClusterService {
    private ArizonaClusterRepository ArizonaClusterRepository;
    private SCClusterRepository SCClusterRepository;
    private TexasClusterRepository TexasClusterRepository;
    private DistrictPlanService DistrictPlanService;
    @Autowired
    public ClusterService(ArizonaClusterRepository ArizonaClusterRepository, SCClusterRepository SCClusterRepository,
                          TexasClusterRepository TexasClusterRepository, DistrictPlanService DistrictPlanService){
        this.ArizonaClusterRepository = ArizonaClusterRepository;
        this.SCClusterRepository = SCClusterRepository;
        this.TexasClusterRepository = TexasClusterRepository;
        this.DistrictPlanService = DistrictPlanService;
    }
//    public Cluster getClusterById(String cluster_Id) {
//        return clusterRepository.findByCluster_Id(cluster_Id);
//    }

//    public List<Cluster> getClustersByStateAndEnsemble_Id(String state, Integer ensemble_id) {
//        if (state.equals("Arizona")) {
//            // Implement the logic to filter clusters by state and ensemble_id
//            return ArizonaClusterRepository.findByStateAndEnsembleIdCustom(ensemble_id);
//        } else {
//            // If state is not provided, return all clusters
//            return ArizonaClusterRepository.findAll();
//        }
//    }

    public List<Object> getAllClustersByStateAndId(String state, Optional<List<String>> clusterId) {
        switch (state)
        {
            case "Arizona":
                List<ArizonaCluster> AZclusterList = ArizonaClusterRepository.findAllBy_idIn(clusterId);
                log.info("Inside the clustersService here is clusterList " + clusterId);
                return new ArrayList<Object>(AZclusterList);

            case "SC":
                List<SCCluster> SCclusterList = SCClusterRepository.findAllBy_idIn(clusterId);
                log.info("Inside the clustersService here is clusterList " + clusterId);
                return new ArrayList<Object>(SCclusterList);

            case "Texas":
                List<TexasCluster> TXclusterList = TexasClusterRepository.findAllBy_idIn(clusterId);
                log.info("Inside the clustersService here is clusterList " + clusterId);
                return new ArrayList<Object>(TXclusterList);

            default:
                return new ArrayList<Object>();
        }
//        if(Objects.equals(state, "Arizona"))
//        {
//            List<ArizonaCluster> clusterList = ArizonaClusterRepository.findAllBy_idIn(clusterId);
//            log.info("Inside the clustersService here is clusterList " + clusterId);
//            return new ArrayList<Object>(clusterList);
//        }
//
//        else {
//            return new ArrayList<Object>();
//        }
    }

    public List<Object>getClusterPlansByStateAndId(String state, String clusterId){

        switch (state)
        {
            case "Arizona":
                Optional<ArizonaCluster> AZcurrentEnsemb = ArizonaClusterRepository.findById(clusterId);
                Optional<List<String>> AZplansOptional = AZcurrentEnsemb.map(ArizonaCluster::getDistrict_plans);
                log.info("I worked here in Cluster get Plans " + AZplansOptional.get());
                return DistrictPlanService.getAllDistrictByStateAndId(state, AZplansOptional);

            case "SC":
                Optional<SCCluster> SCcurrentEnsemb = SCClusterRepository.findById(clusterId);
                Optional<List<String>> SCplansOptional = SCcurrentEnsemb.map(SCCluster::getDistrict_plans);
                log.info("I worked here in Cluster get Plans " + SCplansOptional.get());
                return DistrictPlanService.getAllDistrictByStateAndId(state, SCplansOptional);

            case "Texas":
                Optional<TexasCluster> TXcurrentEnsemb = TexasClusterRepository.findById(clusterId);
                Optional<List<String>> TXplansOptional = TXcurrentEnsemb.map(TexasCluster::getDistrict_plans);
                log.info("I worked here in Cluster get Plans " + TXplansOptional.get());
                return DistrictPlanService.getAllDistrictByStateAndId(state, TXplansOptional);

            default:
                return new ArrayList<Object>();

        }
    }





//        if(Objects.equals(state, "Arizona")){
//            Optional<ArizonaCluster> currentEnsemb = ArizonaClusterRepository.findById(clusterId);
//            Optional<List<String>> plansOptional = currentEnsemb.map(ArizonaCluster::getDistrict_plans);
//            log.info("I worked here in Cluster get Plans " + plansOptional.get());
//            return DistrictPlanService.getAllDistrictByStateAndId(state, plansOptional);
//        }
//        return new ArrayList<>();



}
