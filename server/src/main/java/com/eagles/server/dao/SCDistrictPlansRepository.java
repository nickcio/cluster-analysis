package com.eagles.server.dao;

import com.eagles.server.model.SCCluster;
import com.eagles.server.model.SCDistrictPlans;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface SCDistrictPlansRepository extends MongoRepository<SCDistrictPlans, String> {
    List<SCDistrictPlans>findAllBy_idIn(Optional<List<String>> ids);
}