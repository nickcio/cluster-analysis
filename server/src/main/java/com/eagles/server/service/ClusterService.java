package com.eagles.server.service;

import com.eagles.server.dao.ClusterRepository;
import com.eagles.server.model.Cluster;

import com.eagles.server.model.Ensemble;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ClusterService {
    private ClusterRepository clusterRepository;
    @Autowired
    public ClusterService(ClusterRepository clusterRepository){
        this.clusterRepository = clusterRepository;
    }
//    public Cluster getClusterById(String cluster_Id) {
//        return clusterRepository.findByCluster_Id(cluster_Id);
//    }

    public List<Cluster> getClustersByStateAndEnsemble_Id(String state, Integer ensemble_id) {
        if (state != null && !state.isEmpty()) {
            // Implement the logic to filter clusters by state and ensemble_id
            return clusterRepository.findByStateAndEnsembleIdCustom(state, ensemble_id);
        } else {
            // If state is not provided, return all clusters
            return clusterRepository.findAll();
        }
    }
    public List<Cluster> getAllClusters() {
        return clusterRepository.findAll();
    }

}
