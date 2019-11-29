package com.codeclan.server.repositories.parks;

import com.codeclan.server.models.Park;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface ParkRepository extends JpaRepository<Park, Long> {
}
