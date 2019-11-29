package com.codeclan.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "parks")
public class Park {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "capacity")
    private int capacity;

    @JsonIgnoreProperties("parks")
    @OneToMany(mappedBy = "park", fetch = FetchType.LAZY)
    private List<Dinosaur> dinosaurs;

    @JsonIgnoreProperties("parks")
    @OneToMany(mappedBy = "park", fetch = FetchType.LAZY)
    private List<Paddock> paddocks;

    public Park(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.dinosaurs = new ArrayList<>();
        this.paddocks = new ArrayList<>();
    }

    public Park() {
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

    public List<Dinosaur> getDinosaurs() {
        return dinosaurs;
    }

    public void setDinosaurs(List<Dinosaur> dinosaurs) {
        this.dinosaurs = dinosaurs;
    }

    public List<Paddock> getPaddocks() {
        return paddocks;
    }

    public void setPaddocks(List<Paddock> paddocks) {
        this.paddocks = paddocks;
    }

    public void addDinosaur(Dinosaur dinosaur) {
        this.dinosaurs.add(dinosaur);
    }

    public void addPaddock(Paddock paddock) {
        this.paddocks.add(paddock);
    }

}
