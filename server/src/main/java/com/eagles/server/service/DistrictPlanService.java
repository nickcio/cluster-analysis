package com.eagles.server.service;

import com.eagles.server.dao.ArizonaDistrictPlansRepository;
import com.eagles.server.dao.SCDistrictPlansRepository;
import com.eagles.server.dao.TexasDistrictPlansRepository;
import com.eagles.server.dao.SCClusterRepository;
import com.eagles.server.service.geoJsonService;
import com.eagles.server.model.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Slf4j
public class DistrictPlanService {
//    private DistrictPlansRepository districtPlansRepository;
    private ArizonaDistrictPlansRepository ArizonaDistrictPlansRepository;
    private SCDistrictPlansRepository SCDistrictPlansRepository;
    private TexasDistrictPlansRepository TexasDistrictPlansRepository;

    private final geoJsonService geoJsonService;
    @Autowired
    public DistrictPlanService(ArizonaDistrictPlansRepository ArizonaDistrictPlansRepository, SCDistrictPlansRepository SCDistrictPlansRepository,
                               TexasDistrictPlansRepository TexasDistrictPlansRepository, geoJsonService geoJsonService) {

        this.ArizonaDistrictPlansRepository = ArizonaDistrictPlansRepository;
        this.SCDistrictPlansRepository = SCDistrictPlansRepository;
        this.TexasDistrictPlansRepository = TexasDistrictPlansRepository;
        this.geoJsonService = geoJsonService;
    }

//    public DistrictPlan saveDistrictPlan(DistrictPlan plan) {
//        return districtPlansRepository.save(plan);
//    }

//    public List<DistrictPlan> getAllDistrictPlan(){
//
//        return districtPlansRepository.findAll();
//    }

//    public List<DistrictPlan> getDistrictBy(String state, Integer ensemble_id, Integer cluster_id) {
//        if (state != null && !state.isEmpty()) {
//            // Implement the logic to filter clusters by state and ensemble_id
//            return districtPlansRepository.findByStateAndEnsembleIdAndClusterId(state, ensemble_id, cluster_id);
//        } else {
//            // If state is not provided, return all clusters
//            return districtPlansRepository.findAll();
//        }
//    }

    public List<Object> getAllDistrictByStateAndId(String state, Optional<List<String>> districtId){
        switch (state)
        {
            case "Arizona":
                List<ArizonaDistrictPlans> AZdistrictPlansList = ArizonaDistrictPlansRepository.findAllBy_idIn(districtId);
                log.info("Inside the districtPlanService to get District plans here is AZdistrictListt " + AZdistrictPlansList);
                return new ArrayList<Object>(AZdistrictPlansList);

            case "SC":
                List<SCDistrictPlans> SCdistrictPlansList = SCDistrictPlansRepository.findAllBy_idIn(districtId);
                log.info("Inside the districtPlanService to get District plans here is SCdistrictListt " + SCdistrictPlansList);
                return new ArrayList<Object>(SCdistrictPlansList);

            case "Texas":
                List<TexasDistrictPlans> TXdistrictPlansList = TexasDistrictPlansRepository.findAllBy_idIn(districtId);
                log.info("Inside the districtPlanService to get District plans here is TXdistrictListt " + TXdistrictPlansList);
                return new ArrayList<Object>(TXdistrictPlansList);

            default:
                return new ArrayList<Object>();
        }
    }


    public List<Object> getDistrictByStateAndId(String state, String districtId){
        switch (state)
        {
            case "Arizona":
                log.info("Inside the districtPlanService, getDistrictByStateAndID method Arizona");
                return Collections.singletonList(ArizonaDistrictPlansRepository.findById(districtId));

            case "SC":
                log.info("Inside the districtPlanService, getDistrictByStateAndID method SC");
                return Collections.singletonList(SCDistrictPlansRepository.findById(districtId));

            case "Texas":
                log.info("Inside the districtPlanService, getDistrictByStateAndID method Texas");
                return Collections.singletonList(TexasDistrictPlansRepository.findById(districtId));

            default:
                return new ArrayList<Object>();
        }
    }

    public List<Object> getGeoByStateandId(String state, String districtId){
        switch (state)
        {
            case "Arizona":
                Optional<ArizonaDistrictPlans> AZdistrictPlansList = ArizonaDistrictPlansRepository.findById(districtId);
                log.info("Inside the districtPlanService to get District plans here is AZ ");
                String AZAveragePlan = AZdistrictPlansList.get().getGeojson_id();
                log.info("Inside the districtPlanService to get District plans here is AZ geoID is this: " + AZAveragePlan);
                return geoJsonService.getGeoJsonByStateAndId(state, AZAveragePlan);
            case "SC":
                Optional<SCDistrictPlans> SCdistrictPlansList = SCDistrictPlansRepository.findById(districtId);
                log.info("Inside the districtPlanService to get District plans here is SCdistrictListt " + SCdistrictPlansList);
                Optional<String> SCAveragePlan = SCdistrictPlansList.map(SCDistrictPlans::getGeojson_id);
                return geoJsonService.getGeoJsonByStateAndId(state, SCAveragePlan.get());

            case "Texas":
                Optional<TexasDistrictPlans> TXdistrictPlansList = TexasDistrictPlansRepository.findById(districtId);
                log.info("Inside the districtPlanService to get District plans here is TXdistrictListt " + TXdistrictPlansList);
                Optional<String> TexasAveragePlan = TXdistrictPlansList.map(TexasDistrictPlans::getGeojson_id);
                return geoJsonService.getGeoJsonByStateAndId(state, TexasAveragePlan.get());
            default:
                return new ArrayList<Object>();
        }
    }



//        if(Objects.equals(state, "Arizona"))
//        {
//            List<ArizonaDistrictPlans> districtPlansList = ArizonaDistrictPlansRepository.findAllBy_idIn(districtId);
//            log.info("Inside the districtPlanService to get District plans here is districtListt " + districtPlansList);
//            return new ArrayList<Object>(districtPlansList);
//        }
//
//        else {
//            return new ArrayList<Object>();
//        }


}
