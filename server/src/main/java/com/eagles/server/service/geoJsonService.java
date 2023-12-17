package com.eagles.server.service;


import com.eagles.server.dao.ArizonaDistrictPlansRepository;
import com.eagles.server.dao.ArizonageoJSONRepository;

import com.eagles.server.model.ArizonaCluster;
import com.eagles.server.model.ArizonageoJSON;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Slf4j
public class geoJsonService {
    private ArizonageoJSONRepository ArizonageoJSONRepository;
    @Autowired
    public geoJsonService(ArizonageoJSONRepository ArizonageoJSONRepository) {
        this.ArizonageoJSONRepository = ArizonageoJSONRepository;
    }

    public List<Object> getGeoJsonByStateAndId(){
        return new ArrayList<Object>(ArizonageoJSONRepository.findAll());
    }


    public List<Object> getGeoJsonByStateAndId(String state, String geoJsonId) {
        if(Objects.equals(state, "Arizona"))
        {
            return new ArrayList<Object>(Collections.singleton(ArizonageoJSONRepository.findById(geoJsonId)));
        }

        else {
            return new ArrayList<Object>();
        }
    }





}
