package com.codeclan.server.components;

import com.codeclan.server.models.Dinosaur;
import com.codeclan.server.models.Paddock;
import com.codeclan.server.models.Park;
import com.codeclan.server.repositories.dinosaurs.DinosaurRepository;
import com.codeclan.server.repositories.paddocks.PaddockRepository;
import com.codeclan.server.repositories.parks.ParkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DinosaurRepository dinosaurRepository;

    @Autowired
    PaddockRepository paddockRepository;

    @Autowired
    ParkRepository parkRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args){

        Park park = new Park("CJ's Park", 100);
        parkRepository.save(park);

        Paddock paddock1 = new Paddock("Small Paddock", 5, 1, "Herbivore", false, park);
        paddockRepository.save(paddock1);

        Paddock paddock2 = new Paddock("Large Paddock", 10, 3, "Carnivore", true, park);
        paddockRepository.save(paddock2);

        Dinosaur dinosaur1 = new Dinosaur("Diplodocus", "Herbivore", 5, "Jordan", 1, paddock1, park);
        dinosaurRepository.save(dinosaur1);

        Dinosaur dinosaur2 = new Dinosaur("Tyrannosaurus Rex", "Carnivore", 10, "Steve", 3, paddock2, park);
        dinosaurRepository.save(dinosaur2);

        paddock1.addDinosaur(dinosaur1);
        paddockRepository.save(paddock1);

    }

}
