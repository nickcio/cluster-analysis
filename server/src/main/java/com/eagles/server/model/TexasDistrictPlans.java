package com.eagles.server.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Collection;
import java.util.Map;
import java.util.List;
@Getter
@Setter
@Document(collection = "TexasDistrictPlans")
public class TexasDistrictPlans {
    @Id
    private String _id;
    @Field("geojson_id")
    private String geojson_id;
    @Field("mds_centroid")
    private List<Double> mds_centroid;
    @Field("dem_percentages")
    private Map<String, Double>dem_percentages;
    @Field("rep_percentages")
    private Map<String, Double>rep_percentages;
    @Field("district_winners")
    private Map<Integer, List<String>>district_winners;
    @Field("rep_dem_splits")
    private Map<String,Integer>rep_dem_splits;
    @Field("opportunity_districts")
    private List<Integer>opportunity_districts;
    @Field("population_data")
    private Map<String, Map<String, List<Integer>>> population_data;
    @Field("area_data")
    private Map<Integer, Double> area_data;




    public TexasDistrictPlans(String _id, String geojson_id,List<Double> mds_centroid, Map<String, Double>dem_percentages,
                           Map<String, Double>rep_percentages, Map<Integer, List<String>>district_winners, Map<String,Integer>rep_dem_splits,
                           List<Integer>opportunity_districts, Map<String, Map<String, List<Integer>>> population_data,Map<Integer, Double> area_data){
        this._id = _id;
        this.geojson_id = geojson_id;
        this.mds_centroid = mds_centroid;
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

    public String getGeojson_id() {
        return geojson_id;
    }

    public List<Double> getMds_centroid() {
        return mds_centroid;
    }

    public Map<String, Double> getDem_percentages() {
        return dem_percentages;
    }

    public Map<String, Double> getRep_percentages() {
        return rep_percentages;
    }

    public Map<Integer, List<String>> getDistrict_winners() {
        return district_winners;
    }

    public Map<String, Integer> getRep_dem_splits() {
        return rep_dem_splits;
    }

    public List<Integer> getOpportunity_districts() {
        return opportunity_districts;
    }

    public Map<String, Map<String, List<Integer>>> getPopulation_data() {
        return population_data;
    }

    public Map<Integer, Double> getArea_data() {
        return area_data;
    }
}
