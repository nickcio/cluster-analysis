package com.eagles.server.service;

import com.eagles.server.dao.DistrictPlansRepository;
import com.eagles.server.dao.ClusterPlanRepository;
import com.eagles.server.model.DistrictPlan;
import com.eagles.server.model.Cluster;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


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

    // Method to get all clusters
    public List<Cluster> getAllClusters() {
        return clusterPlanRepository.findAll();
    }


}

