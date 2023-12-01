package com.eagles.server.dao;

import com.eagles.server.model.Ensemble;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
public interface EnsembleRepository extends MongoRepository<Ensemble, String> {
    List<Ensemble>findByState(String state);
}
