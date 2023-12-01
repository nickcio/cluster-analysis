package com.eagles.server.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Map;
import java.util.List;
@Getter
@Setter
@Document
public class DistrictPlan {


    @Id
    private String id;
    private String plan_id;
    private String geojson_id;
    private String dem_percentages;
    private String rep_percentages;
    private Map<String,String>district_winners;
    private Map<String, Integer> rep_dem_splits;
    private List<Integer> opportunity_districts;
    private Map<String,Integer> population_data;
    private Map<String,String> area_data;
    private int total_area;
    private int availability;
    private String state;
    private int ensemble_id;
    private int cluster_id;

    public DistrictPlan(String id, String plan_id, String geojson_id, String dem_percentages, String rep_percentages,
                        Map<String,String>district_winners, Map<String, Integer>rep_dem_splits, List<Integer>opportunity_districts,
                        Map<String,Integer> population_data, Map<String ,String>area_data, int total_area, int availability,
                        String state, int ensemble_id, int cluster_id) {
        this.id = id;
        this.plan_id = plan_id;
        this.geojson_id = geojson_id;
        this.dem_percentages = dem_percentages;
        this.rep_percentages = rep_percentages;
        this.district_winners = district_winners;
        this.rep_dem_splits = rep_dem_splits;
        this.opportunity_districts = opportunity_districts;
        this.population_data = population_data;
        this.area_data = area_data;
        this.total_area = total_area;
        this.availability = availability;
        this.state = state;
        this.ensemble_id = ensemble_id;
        this.cluster_id = cluster_id;
    }

    public String getId() {
        return id;
    }

    public String getPlan_id() {
        return plan_id;
    }
    public String getGeojson_id() {
        return geojson_id;
    }
    public String getDem_percentages() {
        return dem_percentages;
    }

    public String getRep_percentages() {
        return rep_percentages;
    }

    public Map<String, String> getDistrict_winners() {
        return district_winners;
    }

    public Map<String, Integer> getRep_dem_splits() {
        return rep_dem_splits;
    }

    public List<Integer> getOpportunity_districts() {
        return opportunity_districts;
    }

    public Map<String, Integer> getPopulation_data() {
        return population_data;
    }

    public Map<String, String> getArea_data() {
        return area_data;
    }

    public int getTotal_area() {
        return total_area;
    }

    public int getAvailability() {
        return availability;
    }

    public String getState() {
        return state;
    }

    public int getEnsemble_id() {
        return ensemble_id;
    }

    public int getCluster_id() {
        return cluster_id;
    }
//    @Override
//    public String toString() {
//        return "DistrictPlan{" +
//                "numberOfDistricts=" + numberOfDistricts +
//                ", whitePopulation=" + whitePopulation +
//                ", africanAmericanPopulation=" + africanAmericanPopulation +
//                ", hispanicPopulation=" + hispanicPopulation +
//                ", asianPopulation=" + asianPopulation +
//                ", averageIncome=" + averageIncome +
//                '}';
//    }
}

