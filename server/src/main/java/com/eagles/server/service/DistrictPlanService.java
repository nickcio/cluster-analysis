package com.eagles.server.service;

import com.eagles.server.dao.DistrictPlansRepository;
import com.eagles.server.model.DistrictPlan;
import org.springframework.stereotype.Service;

@Service
public class DistrictPlanService {
    private final DistrictPlansRepository districtPlansRepository;

    public DistrictPlanService(DistrictPlansRepository repository) {
        this.districtPlansRepository = repository;
    }

    public DistrictPlan saveDistrictPlan(DistrictPlan plan) {
        return districtPlansRepository.save(plan);
    }
}
