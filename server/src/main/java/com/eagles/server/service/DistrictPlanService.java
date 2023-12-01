package com.eagles.server.service;

import com.eagles.server.dao.DistrictPlansRepository;
import com.eagles.server.model.Cluster;
import com.eagles.server.model.DistrictPlan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class DistrictPlanService {
    private DistrictPlansRepository districtPlansRepository;
    @Autowired
    public DistrictPlanService(DistrictPlansRepository repository) {
        this.districtPlansRepository = repository;
    }

//    public DistrictPlan saveDistrictPlan(DistrictPlan plan) {
//        return districtPlansRepository.save(plan);
//    }

    public List<DistrictPlan> getAllDistrictPlan(){
        return districtPlansRepository.findAll();
    }

    public List<DistrictPlan> getDistrictBy(String state, Integer ensemble_id, Integer cluster_id) {
        if (state != null && !state.isEmpty()) {
            // Implement the logic to filter clusters by state and ensemble_id
            return districtPlansRepository.findByStateAndEnsembleIdAndClusterId(state, ensemble_id, cluster_id);
        } else {
            // If state is not provided, return all clusters
            return districtPlansRepository.findAll();
        }
    }
}
