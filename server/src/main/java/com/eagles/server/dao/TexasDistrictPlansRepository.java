package com.eagles.server.dao;

import com.eagles.server.model.TexasCluster;
import com.eagles.server.model.TexasDistrictPlans;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface TexasDistrictPlansRepository extends MongoRepository<TexasDistrictPlans, String> {
    List<TexasDistrictPlans>findAllBy_idIn(Optional<List<String>> ids);
}