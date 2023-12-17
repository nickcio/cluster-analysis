package com.eagles.server.dao;

import com.eagles.server.model.ArizonaEnsembles;
import com.eagles.server.model.ArizonageoJSON;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface ArizonageoJSONRepository extends MongoRepository<ArizonageoJSON, String> {

}
