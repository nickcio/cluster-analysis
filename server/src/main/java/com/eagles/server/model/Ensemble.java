//package com.eagles.server.model;
//
//
//import lombok.Getter;
//import lombok.Setter;
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//import java.util.ArrayList;
//import java.util.List;
//public class Ensemble {
//
//
//    @Id
//    private String name;
//
//    private List<Cluster> clusters;
//
//    public Ensemble(String name, List<Cluster> cluster) {
//        this.name = name;
//        this.clusters = cluster;
//    }
//
//    public List<Cluster> getClusters(){
//        return this.clusters;
//    }
//    @Override
//    public String toString() {
//        return "Ensemble{" +
//               clusters;
//    }
//
//
//}
