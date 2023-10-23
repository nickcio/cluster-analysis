package com.eagles.server.dao;

import com.eagles.server.model.DistrictPlan;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DistrictPlansRepository extends MongoRepository<DistrictPlan, String> {}
