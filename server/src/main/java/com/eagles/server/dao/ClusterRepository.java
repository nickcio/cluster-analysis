package com.eagles.server.dao;

import com.eagles.server.model.Cluster;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;
public interface ClusterRepository extends MongoRepository<Cluster,String>{
    @Query("{ 'state' : ?0, 'ensemble_id' : ?1 }")
    List<Cluster> findByStateAndEnsembleIdCustom(String state, Integer ensemble_id);
}
