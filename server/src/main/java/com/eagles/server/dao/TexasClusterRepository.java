package com.eagles.server.dao;

import com.eagles.server.model.TexasCluster;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;


public interface TexasClusterRepository extends MongoRepository<TexasCluster,String>{
    List<TexasCluster> findAllBy_idIn(Optional<List<String>> ids);
    //List<ArizonaCluster> findAllBy_id(Optional<List<String>> clusterId);
}
