package com.eagles.server.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document
public class DistrictPlan {
    @Id
    private int numberOfDistricts;
    private int whitePopulation;
    private int africanAmericanPopulation;
    private int hispanicPopulation;
    private int asianPopulation;
    private int averageIncome;

    public DistrictPlan(int numberOfDistricts, int whitePopulation, int africanAmericanPopulation, int hispanicPopulation, int asianPopulation, int averageIncome) {
        this.numberOfDistricts = numberOfDistricts;
        this.whitePopulation = whitePopulation;
        this.africanAmericanPopulation = africanAmericanPopulation;
        this.hispanicPopulation = hispanicPopulation;
        this.asianPopulation = asianPopulation;
        this.averageIncome = averageIncome;
    }

    @Override
    public String toString() {
        return "DistrictPlan{" +
                "numberOfDistricts=" + numberOfDistricts +
                ", whitePopulation=" + whitePopulation +
                ", africanAmericanPopulation=" + africanAmericanPopulation +
                ", hispanicPopulation=" + hispanicPopulation +
                ", asianPopulation=" + asianPopulation +
                ", averageIncome=" + averageIncome +
                '}';
    }
}
