package com.eagles.server.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Getter
public class Cluster {


    @Id
    private String name;
    private int id;
    private double percentWhite;
    private double percentaa;
    private double percentHispanic;
    private double percentDemo;
    private double percentRepub;
    private int size;


    private ArrayList<Objects> data;

    /*
    "percent white": 47.665,
    "percent aa": 2.001,
    "percent hispanic": 15.059,
    "percent demo": 58.776,
    "percent republic": 41.224,
    "cluster size": 310,
     */
    public Cluster(String name, int id, double percentWhite, double percentaa,
                   double percentHispanic, double percentDemo, double percentRepub,
                   int size, ArrayList<Objects> data) {
        this.name = name;
        this.id = id;
        this.percentWhite = percentWhite;
        this.percentaa = percentaa;
        this.percentHispanic = percentHispanic;
        this.percentDemo = percentDemo;
        this.percentRepub = percentRepub;
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
