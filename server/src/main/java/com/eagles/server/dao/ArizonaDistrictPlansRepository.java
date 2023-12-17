package com.eagles.server.dao;

import com.eagles.server.model.ArizonaCluster;
import com.eagles.server.model.ArizonaDistrictPlans;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ArizonaDistrictPlansRepository extends MongoRepository<ArizonaDistrictPlans, String> {
    List<ArizonaDistrictPlans>findAllBy_idIn(Optional<List<String>> ids);
}