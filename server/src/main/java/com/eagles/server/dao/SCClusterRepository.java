package com.eagles.server.dao;

import com.eagles.server.model.SCCluster;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;


public interface SCClusterRepository extends MongoRepository<SCCluster,String>{
    List<SCCluster> findAllBy_idIn(Optional<List<String>> ids);
    //List<ArizonaCluster> findAllBy_id(Optional<List<String>> clusterId);
}
