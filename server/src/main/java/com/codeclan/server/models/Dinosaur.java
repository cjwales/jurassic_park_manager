package com.codeclan.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "dinosaurs")
public class Dinosaur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "species")
    private String species;
    @Column(name = "diet")
    private String diet;
    @Column(name = "hunger")
    private int hunger;
    @Column(name = "name")
    private String name;
    @Column(name = "threat_level")
    private int threatLevel;

    @JsonIgnoreProperties("dinosaurs")
    @ManyToOne
    @JoinColumn(name = "park_id", nullable = false)
    private Park park;

    @JsonIgnoreProperties("dinosaurs")
    @ManyToOne
    @JoinColumn(name = "paddock_id", nullable = false)
    private Paddock paddock;

    public Dinosaur(String species, String diet, int hunger, String name, int threatLevel, Paddock paddock, Park park) {
        this.species = species;
        this.diet = diet;
        this.hunger = hunger;
        this.name = name;
        this.threatLevel = threatLevel;
        this.paddock = paddock;
        this.park = park;
    }

    public Dinosaur() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Park getPark() {
        return park;
    }

    public void setPark(Park park) {
        this.park = park;
    }

}
