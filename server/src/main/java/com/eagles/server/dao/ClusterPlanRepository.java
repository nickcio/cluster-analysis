package com.eagles.server.dao;

import com.eagles.server.model.Cluster;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface ClusterPlanRepository extends MongoRepository<Cluster, String>{
}
