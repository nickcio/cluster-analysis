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
    private String _id;
    private String plan_Id;
    private String geojson_id;
    private String dem_percentages;
    private String rep_percentages;
    private Map<String,String>district_winners;
    private Map<String, Integer> rep_dem_splits;
    private List<Integer> opportunity_districts;
    private Map<String,String> population_data;
    private Map<String,String> area_data;

    public DistrictPlan(String _id, String plan_Id, String geojson_id, String dem_percentages, String rep_percentages,
                        Map<String,String>district_winners, Map<String, Integer>rep_dem_splits, List<Integer>opportunity_districts,
                        Map<String,String> population_data, Map<String ,String>area_data) {
        this._id = _id;
        this.plan_Id = plan_Id;
        this.geojson_id = geojson_id;
        this.dem_percentages = dem_percentages;
        this.rep_percentages = rep_percentages;
        this.district_winners = district_winners;
        this.rep_dem_splits = rep_dem_splits;
        this.opportunity_districts = opportunity_districts;
        this.population_data = population_data;
        this.area_data = area_data;
    }

    public String get_id() {
        return _id;
    }

    public String getPlan_Id() {
        return plan_Id;
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

    public Map<String, String> getPopulation_data() {
        return population_data;
    }

    public Map<String, String> getArea_data() {
        return area_data;
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

