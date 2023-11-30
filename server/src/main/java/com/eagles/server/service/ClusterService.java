package com.eagles.server.service;

import com.eagles.server.dao.DistrictPlansRepository;
import com.eagles.server.dao.ClusterPlanRepository;
import com.eagles.server.model.DistrictPlan;
import com.eagles.server.model.Cluster;
import org.springframework.stereotype.Service;




@Service
public class ClusterService {
    private final ClusterPlanRepository clusterPlanRepository;

    public ClusterService(ClusterPlanRepository repository) {
        this.clusterPlanRepository = repository;
    }


}

