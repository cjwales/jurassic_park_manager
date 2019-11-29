package com.codeclan.server.repositories.parks;

import com.codeclan.server.models.Park;
import com.codeclan.server.projections.EmbedParks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedParks.class)
public interface ParkRepository extends JpaRepository<Park, Long> {
}
