package com.eagles.server.dao;

import com.eagles.server.model.ArizonaEnsembles;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ArizonaEnsembleRepository extends MongoRepository<ArizonaEnsembles, String> {

}
