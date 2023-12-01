package com.eagles.server.service;

import com.eagles.server.dao.EnsembleRepository;
import com.eagles.server.model.Ensemble;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnsembleService {
    private final EnsembleRepository ensembleRepository;

    @Autowired
    public EnsembleService(EnsembleRepository ensembleRepository) {
        this.ensembleRepository = ensembleRepository;
    }

    public List<Ensemble> getAllEnsembles() {
        return ensembleRepository.findAll();
    }
}

