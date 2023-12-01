package com.eagles.server.dao;

import com.eagles.server.model.Cluster;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface ClusterRepository extends MongoRepository<Cluster,String>{
//    Cluster findByCluster_Id(String cluster_Id);
}
