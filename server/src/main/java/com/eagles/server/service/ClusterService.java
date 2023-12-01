package com.eagles.server.service;

import com.eagles.server.dao.DistrictPlansRepository;
import com.eagles.server.dao.ClusterPlanRepository;
import com.eagles.server.model.DistrictPlan;
import com.eagles.server.model.Cluster;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
<<<<<<< Updated upstream
import java.util.Objects;

=======
>>>>>>> Stashed changes

@Service
public class ClusterService {
    private final ClusterPlanRepository clusterPlanRepository;

    public ClusterService(ClusterPlanRepository repository) {
        this.clusterPlanRepository = repository;
    }

    // Method to get a cluster by its ID
    public Cluster getClusterById(String id) {
        return clusterPlanRepository.findById(id).orElse(null);
    }

<<<<<<< Updated upstream
    // Method to get all clusters
    public List<Cluster> getAllClusters() {
=======
    public List<Cluster> getAllClusters(){
>>>>>>> Stashed changes
        return clusterPlanRepository.findAll();
    }



}

