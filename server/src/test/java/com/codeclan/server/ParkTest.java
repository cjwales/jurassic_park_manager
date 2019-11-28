package com.codeclan.server;

import com.codeclan.server.models.Dinosaur;
import com.codeclan.server.models.Paddock;
import com.codeclan.server.models.Park;
import org.junit.Before;
import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ParkTest {

    Park park;
    Dinosaur dinosaur;
    Paddock paddock;

    @Before
    public void before() {
        park = new Park("Isla Nublar", 10000);
        dinosaur = new Dinosaur("Bloody Big Lizard", "Beans", 100, "Frankie", 3, paddock);
        paddock = new Paddock("Pen 2", 10, 3, "Carnivore",false);
    }

    @Test
    public void canAddDinosaurToPark() {
        park.addDinosaur(dinosaur);
        assertEquals(1, park.getDinosaurs().size());
    }

    @Test
    public void canAddPaddockToPark() {
        park.addPaddock(paddock);
        assertEquals(1, park.getPaddocks().size());
    }
}
