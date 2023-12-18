package com.eagles.server.dao;

import com.eagles.server.model.TexasEnsembles;
import com.eagles.server.model.TexasgeoJSON;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface TexasgeoJSONRepository extends MongoRepository<TexasgeoJSON, String> {

}
