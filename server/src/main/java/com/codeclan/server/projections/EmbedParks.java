package com.codeclan.server.projections;

import com.codeclan.server.models.Dinosaur;
import com.codeclan.server.models.Paddock;
import com.codeclan.server.models.Park;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedParks", types = Park.class)
public interface EmbedParks {

    Long getId();
    String getName();
    int getCapacity();
    Dinosaur getDinosaurs();
    Paddock getPaddocks();

}
