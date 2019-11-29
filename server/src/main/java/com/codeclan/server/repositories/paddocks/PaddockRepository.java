package com.codeclan.server.repositories.paddocks;

import com.codeclan.server.models.Paddock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface PaddockRepository extends JpaRepository<Paddock, Long> {
}
