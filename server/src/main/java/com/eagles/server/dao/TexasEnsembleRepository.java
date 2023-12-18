package com.eagles.server.dao;

import com.eagles.server.model.TexasEnsembles;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TexasEnsembleRepository extends MongoRepository<TexasEnsembles, String> {

}
