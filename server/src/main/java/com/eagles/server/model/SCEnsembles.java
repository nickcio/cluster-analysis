package com.eagles.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Map;

@Document(collection = "SCEnsembles")
public class SCEnsembles {
    @Id
    private String _id;
    private int num_district_plans;
    private int num_clusters;
    private List<String> clusters;
    private List<List<String>> optimal_transport_distance_matrix;
    private float average_optimal_transport_distance;
    private List<List<Double>> hamming_distance_matrix;
    private Double average_hamming_distance;
    private Double avg_euclidean_distance;
    private Map<String,Double> average_rep_dem_split;
    private Double average_dem_votes_percent;
    private Double average_rep_votes_percent;
    private Double average_margin_of_victory;
    private Double average_opportunity_districts;
    private Double average_population_margin;
    private Map<String,Double> average_demographic_percent;

    public SCEnsembles(String _id, int num_district_plans, int num_clusters,
                            List<String> clusters, List<List<String>> optimal_transport_distance_matrix, float average_optimal_transport_distance,
                            List<List<Double>> hamming_distance_matrix, Double average_hamming_distance, Double avg_euclidean_distance,
                            Map<String,Double> average_rep_dem_split, Double average_dem_votes_percent, Double average_rep_votes_percent,
                            Double average_margin_of_victory, Double average_opportunity_districts, Double average_population_margin,
                            Map<String,Double> average_demographic_percent) {
        this._id = _id;
        this.num_district_plans = num_district_plans;
        this.num_clusters = num_clusters;
        this.clusters = clusters;
        this.optimal_transport_distance_matrix = optimal_transport_distance_matrix;
        this.average_optimal_transport_distance = average_optimal_transport_distance;
        this.hamming_distance_matrix = hamming_distance_matrix;
        this.average_hamming_distance = average_hamming_distance;
        this.avg_euclidean_distance = avg_euclidean_distance;
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

    public int getNum_clusters() {
        return num_clusters;
    }

    public List<String> getClusters() {
        return clusters;
    }

    public List<List<String>> getOptimal_transport_distance_matrix() {
        return optimal_transport_distance_matrix;
    }

    public float getAverage_optimal_transport_distance() {
        return average_optimal_transport_distance;
    }

    public List<List<Double>> getHamming_distance_matrix() {
        return hamming_distance_matrix;
    }

    public Double getAverage_hamming_distance() {
        return average_hamming_distance;
    }

    public Double getAvg_euclidean_distance() {
        return avg_euclidean_distance;
    }

    public Map<String, Double> getAverage_rep_dem_split() {
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
