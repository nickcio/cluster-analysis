package com.eagles.server.dao;

import com.eagles.server.model.SCEnsembles;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SCEnsembleRepository extends MongoRepository<SCEnsembles, String> {

}
