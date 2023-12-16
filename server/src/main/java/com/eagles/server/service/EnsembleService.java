package com.eagles.server.service;

import com.eagles.server.dao.ArizonaEnsembleRepository;
//import com.eagles.server.dao.EnsembleRepository;
import com.eagles.server.model.ArizonaEnsembles;
//import com.eagles.server.model.Ensemble;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EnsembleService {
    private final ArizonaEnsembleRepository ArizonaEnsembleRepo;

    @Autowired
    public EnsembleService(ArizonaEnsembleRepository ArizonaEnsembleRepo) {
        this.ArizonaEnsembleRepo = ArizonaEnsembleRepo;
    }

    public List<ArizonaEnsembles> getAllArizonaEnsemble() {
        return ArizonaEnsembleRepo.findAll();
    }



    //Here we can find all the shit for the different states when a state is passed in
    public List<Object> getEnsemblesByState(String state) {
        if (state != null && !state.isEmpty() && state == "Arizona") {
            // Implement the logic to filter ensembles by state
            // This could involve calling a custom method in your repository that finds ensembles by state
            return new ArrayList<Object>(getAllArizonaEnsemble());
        } else {
            // If no state is provided, return all ensembles
            return new ArrayList<Object>(getAllArizonaEnsemble());
        }
    }
}

