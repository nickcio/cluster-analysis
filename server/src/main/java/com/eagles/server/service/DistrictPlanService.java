package com.eagles.server.service;

import com.eagles.server.dao.ArizonaDistrictPlansRepository;
import com.eagles.server.dao.DistrictPlansRepository;
import com.eagles.server.model.ArizonaCluster;
import com.eagles.server.model.ArizonaDistrictPlans;
import com.eagles.server.model.Cluster;
import com.eagles.server.model.DistrictPlan;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@Slf4j
public class DistrictPlanService {
//    private DistrictPlansRepository districtPlansRepository;
    private ArizonaDistrictPlansRepository ArizonaDistrictPlansRepository;
    @Autowired
    public DistrictPlanService(ArizonaDistrictPlansRepository ArizonaDistrictPlansRepository) {

        this.ArizonaDistrictPlansRepository = ArizonaDistrictPlansRepository;
    }

//    public DistrictPlan saveDistrictPlan(DistrictPlan plan) {
//        return districtPlansRepository.save(plan);
//    }

//    public List<DistrictPlan> getAllDistrictPlan(){
//
//        return districtPlansRepository.findAll();
//    }

//    public List<DistrictPlan> getDistrictBy(String state, Integer ensemble_id, Integer cluster_id) {
//        if (state != null && !state.isEmpty()) {
//            // Implement the logic to filter clusters by state and ensemble_id
//            return districtPlansRepository.findByStateAndEnsembleIdAndClusterId(state, ensemble_id, cluster_id);
//        } else {
//            // If state is not provided, return all clusters
//            return districtPlansRepository.findAll();
//        }
//    }

    public List<Object> getAllDistrictByStateAndId(String state, Optional<List<String>> districtId){
        if(Objects.equals(state, "Arizona"))
        {
            List<ArizonaDistrictPlans> districtPlansList = ArizonaDistrictPlansRepository.findAllBy_idIn(districtId);
            log.info("Inside the districtPlanService to get District plans here is districtListt " + districtPlansList);
            return new ArrayList<Object>(districtPlansList);
        }

        else {
            return new ArrayList<Object>();
        }
    }

}
