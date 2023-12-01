package com.eagles.server.dao;

import com.eagles.server.model.Ensemble;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EnsembleRepository extends MongoRepository<Ensemble, String> {
}
