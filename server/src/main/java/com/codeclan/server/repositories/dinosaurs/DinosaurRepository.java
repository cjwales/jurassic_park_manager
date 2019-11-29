package com.codeclan.server.repositories.dinosaurs;

import com.codeclan.server.models.Dinosaur;
import com.codeclan.server.projections.EmbedDinosaurs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedDinosaurs.class)
public interface DinosaurRepository extends JpaRepository<Dinosaur, Long> {
}
