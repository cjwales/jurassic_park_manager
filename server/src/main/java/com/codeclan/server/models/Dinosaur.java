package com.codeclan.server.models;

public class Dinosaur {

    private String species;
    private String diet;
    private int hunger;
    private String name;
    private int threatLevel;
    private Paddock paddock;

    public Dinosaur(String species, String diet, int hunger, String name, int threatLevel, Paddock paddock) {
        this.species = species;
        this.diet = diet;
        this.hunger = hunger;
        this.name = name;
        this.threatLevel = threatLevel;
        this.paddock = paddock;
    }

    public Dinosaur() {
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public String getDiet() {
        return diet;
    }

    public void setDiet(String diet) {
        this.diet = diet;
    }

    public int getHunger() {
        return hunger;
    }

    public void setHunger(int hunger) {
        this.hunger = hunger;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getThreatLevel() {
        return threatLevel;
    }

    public void setThreatLevel(int threatLevel) {
        this.threatLevel = threatLevel;
    }

    public Paddock getPaddock() {
        return paddock;
    }

    public void setPaddock(Paddock paddock) {
        this.paddock = paddock;
    }
}
