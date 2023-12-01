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



    public List<Ensemble> getEnsemblesByState(String state) {
        if (state != null && !state.isEmpty()) {
            // Implement the logic to filter ensembles by state
            // This could involve calling a custom method in your repository that finds ensembles by state
            return ensembleRepository.findByState(state);
        } else {
            // If no state is provided, return all ensembles
            return ensembleRepository.findAll();
        }
    }
}

