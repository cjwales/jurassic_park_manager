package com.codeclan.server.repositories.dinosaurs;

import com.codeclan.server.models.Dinosaur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface DinosaurRepository extends JpaRepository<Dinosaur, Long> {
}
