package com.eagles.server.service;


import com.eagles.server.dao.ArizonaDistrictPlansRepository;
import com.eagles.server.dao.ArizonageoJSONRepository;
import com.eagles.server.dao.SCgeoJSONRepository;
import com.eagles.server.dao.TexasgeoJSONRepository;

import com.eagles.server.model.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Slf4j
public class geoJsonService {
    private ArizonageoJSONRepository ArizonageoJSONRepository;
    private SCgeoJSONRepository SCgeoJSONRepository;
    private TexasgeoJSONRepository TexasgeoJSONRepository;


    @Autowired
    public geoJsonService(ArizonageoJSONRepository ArizonageoJSONRepository, SCgeoJSONRepository SCgeoJSONRepository,
                          TexasgeoJSONRepository TexasgeoJSONRepository) {
        this.ArizonageoJSONRepository = ArizonageoJSONRepository;
        this.SCgeoJSONRepository = SCgeoJSONRepository;
        this.TexasgeoJSONRepository = TexasgeoJSONRepository;
    }

    public List<Object> getGeoJsonByStateAndId(){
        return new ArrayList<Object>(ArizonageoJSONRepository.findAll());
    }


    public List<Object> getGeoJsonByStateAndId(String state, String geoJsonId) {
        switch (state)
        {
            case "Arizona":
                return new ArrayList<Object>(Collections.singleton(ArizonageoJSONRepository.findById(geoJsonId)));
            case "SC":
                return new ArrayList<Object>(Collections.singleton(SCgeoJSONRepository.findById(geoJsonId)));

            case "Texas":
                return new ArrayList<Object>(Collections.singleton(TexasgeoJSONRepository.findById(geoJsonId)));

            default:
                return new ArrayList<Object>();
        }




//        if(Objects.equals(state, "Arizona"))
//        {
//            return new ArrayList<Object>(Collections.singleton(ArizonageoJSONRepository.findById(geoJsonId)));
//        }
//
//        else {
//            return new ArrayList<Object>();
//        }
    }





}
