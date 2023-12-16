package com.eagles.server.dao;

import com.eagles.server.model.DistrictPlan;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;
public interface DistrictPlansRepository extends MongoRepository<DistrictPlan, String> {
    @Query("{ 'state' : ?0, 'ensemble_id' : ?1, 'cluster_id' : ?2}")
    List<DistrictPlan> findByStateAndEnsembleIdAndClusterId(String state, Integer ensemble_id, Integer cluster_id);
}
