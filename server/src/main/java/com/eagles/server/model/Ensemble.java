package com.eagles.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "ArizonaEnsembles")
public class Ensemble {
    @Id
    private String id;

    @Field("ensembleID")
    private int ensembleId;
    @Field("clusters")
    private String clusterAmt;
    @Field("district plans")
    private String plans;

    @Field("cluster variance")
    private String varience;
    @Field("state")
    private String state;
    public String getId() {
        return id;
    }

    public int getEnsembleId() {
        return ensembleId;
    }



    public String getPlans() {
        return plans;
    }

    public String getVarience() {
        return varience;
    }

    public String getClusters() {
        return clusterAmt;
    }
    public String getState() {
        return state;
    }

}
