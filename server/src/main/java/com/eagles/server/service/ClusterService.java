package com.eagles.server.service;

import com.eagles.server.dao.ArizonaClusterRepository;

import com.eagles.server.model.ArizonaCluster;


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
    @Autowired
    public ClusterService(ArizonaClusterRepository ArizonaClusterRepository){
        this.ArizonaClusterRepository = ArizonaClusterRepository;
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
        //if(Objects.equals(state, "Arizona"))
        //{
            List<ArizonaCluster> clusterList = ArizonaClusterRepository.findAllBy_idIn(clusterId);
            log.info("Inside the clustersService here is clusterList " + clusterId);
            return new ArrayList<Object>(clusterList);
       // }

       // else{
        //    return new ArrayList<Object>();
       // }

    }


}
