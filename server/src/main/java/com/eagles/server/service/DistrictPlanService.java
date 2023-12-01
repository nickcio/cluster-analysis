package com.eagles.server.service;

import com.eagles.server.dao.DistrictPlansRepository;
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
}
