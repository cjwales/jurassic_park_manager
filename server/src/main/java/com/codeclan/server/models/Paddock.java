package com.codeclan.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "paddocks")
public class Paddock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "capacity")
    private int capacity;
    @Column(name = "security_level")
    private int securityLevel;
    @Column(name = "type")
    private String type;
    @Column(name = "is_rampaging")
    private boolean isRampaging;

    @JsonIgnoreProperties("paddocks")
    @ManyToOne
    @JoinColumn(name = "park_id", nullable = false)
    private Park park;

    @JsonIgnoreProperties("paddocks")
    @OneToMany(mappedBy = "paddock", fetch = FetchType.LAZY)
    private List<Dinosaur> dinosaurs;

    public Paddock(String name, int capacity, int securityLevel, String type, boolean isRampaging, Park park) {
        this.name = name;
        this.capacity = capacity;
        this.securityLevel = securityLevel;
        this.type = type;
        this.isRampaging = isRampaging;
        this.dinosaurs = new ArrayList<>();
        this.park = park;
    }

    public Paddock() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public int getSecurityLevel() {
        return securityLevel;
    }

    public void setSecurityLevel(int securityLevel) {
        this.securityLevel = securityLevel;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isRampaging() {
        return isRampaging;
    }

    public void setRampaging(boolean rampaging) {
        isRampaging = rampaging;
    }

    public List<Dinosaur> getDinosaurs() {
        return dinosaurs;
    }

    public void setDinosaurs(List<Dinosaur> dinosaurs) {
        this.dinosaurs = dinosaurs;
    }

    public Park getPark() {
        return park;
    }

    public void setPark(Park park) {
        this.park = park;
    }

    public void addDinosaur(Dinosaur dinosaur) {
        this.dinosaurs.add(dinosaur);
    }

}
