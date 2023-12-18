package com.eagles.server.dao;

import com.eagles.server.model.SCEnsembles;
import com.eagles.server.model.SCgeoJSON;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface SCgeoJSONRepository extends MongoRepository<SCgeoJSON, String> {

}
