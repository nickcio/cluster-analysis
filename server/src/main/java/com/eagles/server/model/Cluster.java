package com.eagles.server.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

public class Cluster {


    @Id
    private String name;
    private int id;
    private double percentD;
    private double percentR;
    private int size;

    private ArrayList<DistrictPlan> data;

    public Cluster(String name, int id, double percentD, double percentR, int size, ArrayList<DistrictPlan> data) {
        this.name = name;
        this.id = id;
        this.percentD = percentD;
        this.percentR = percentR;
        this.size = size;
        this.data = data;
    }


//    @Override
//    public String toString() {
//        return  "Cluster{" +
//                "name='" + name + '\'' +
//                ", id='" + id + '\'' +
//                ", percentDemocratic=" + percentD +
//                ", percentRepublican=" + percentR +
//                ", clusterSize=" + size +
//                '}';
//    }



}
