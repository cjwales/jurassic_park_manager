package com.codeclan.server.repositories.paddocks;

import com.codeclan.server.models.Paddock;
import com.codeclan.server.projections.EmbedPaddocks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedPaddocks.class)
public interface PaddockRepository extends JpaRepository<Paddock, Long> {
}
