package com.eagles.server.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import java.util.List;
import java.util.Map;

@Document(collection = "TexasCluster")
public class TexasCluster {
    @Id
    private String _id;
    private int num_district_plans;
    private List<String> district_plans;
    private List<Double> centroid;
    private Double average_euclidean_distance;
    private String average_plan;
    private Map<String, String> interesting_plans;
    private Map<String,String> average_rep_dem_split;
    private Double average_dem_votes_percent;
    private Double average_rep_votes_percent;
    private Double average_margin_of_victory;
    private Double average_opportunity_districts;
    private Double average_population_margin;
    private Map<String, Double> average_demographic_percent;

    public TexasCluster(String _id, int num_district_plans, List<String> district_plans, List<Double> centroid,
                     Double average_euclidean_distance, String average_plan, Map<String, String> interesting_plans,
                     Map<String,String> average_rep_dem_split, Double average_dem_votes_percent, Double average_rep_votes_percent,
                     Double average_margin_of_victory, Double average_opportunity_districts, Double average_population_margin,
                     Map<String, Double> average_demographic_percent){
        this._id = _id;
        this.num_district_plans = num_district_plans;
        this.district_plans = district_plans;
        this.centroid = centroid;
        this.average_euclidean_distance = average_euclidean_distance;
        this.average_plan = average_plan;
        this.interesting_plans = interesting_plans;
        this.average_rep_dem_split = average_rep_dem_split;
        this.average_dem_votes_percent = average_dem_votes_percent;
        this.average_rep_votes_percent = average_rep_votes_percent;
        this.average_margin_of_victory = average_margin_of_victory;
        this.average_opportunity_districts = average_opportunity_districts;
        this.average_population_margin = average_population_margin;
        this.average_demographic_percent = average_demographic_percent;
    }
    public String get_id() {
        return _id;
    }

    public int getNum_district_plans() {
        return num_district_plans;
    }

    public List<String> getDistrict_plans() {
        return district_plans;
    }

    public List<Double> getCentroid() {
        return centroid;
    }

    public Double getAverage_euclidean_distance() {
        return average_euclidean_distance;
    }

    public String getAverage_plan() {
        return average_plan;
    }

    public Map<String, String> getInteresting_plans() {
        return interesting_plans;
    }

    public Map<String, String> getAverage_rep_dem_split() {
        return average_rep_dem_split;
    }

    public Double getAverage_dem_votes_percent() {
        return average_dem_votes_percent;
    }

    public Double getAverage_rep_votes_percent() {
        return average_rep_votes_percent;
    }

    public Double getAverage_margin_of_victory() {
        return average_margin_of_victory;
    }

    public Double getAverage_opportunity_districts() {
        return average_opportunity_districts;
    }

    public Double getAverage_population_margin() {
        return average_population_margin;
    }

    public Map<String, Double> getAverage_demographic_percent() {
        return average_demographic_percent;
    }
}
