package com.eagles.server.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "Ensembles")
public class Ensemble {
    @Id
    private String id;

    @Field("ensembleID")
    private int ensembleId;

    private String summary;

    public String getId() {
        return id;
    }

    public int getEnsembleId() {
        return ensembleId;
    }

    public String getSummary() {
        return summary;
    }
}
