package com.eagles.server.service;


import com.eagles.server.dao.ArizonaDistrictPlansRepository;
import com.eagles.server.dao.ArizonageoJSONRepository;

import com.eagles.server.model.ArizonageoJSON;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@Slf4j
public class geoJsonService {
    private ArizonageoJSONRepository ArizonageoJSONRepository;
    @Autowired
    public geoJsonService(ArizonageoJSONRepository ArizonageoJSONRepository) {
        this.ArizonageoJSONRepository = ArizonageoJSONRepository;
    }

    public List<Object> getAllJson(){
        return new ArrayList<Object>(ArizonageoJSONRepository.findAll());
    }

}
