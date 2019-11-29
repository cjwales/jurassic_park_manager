package com.codeclan.server.projections;

import com.codeclan.server.models.Dinosaur;
import com.codeclan.server.models.Paddock;
import com.codeclan.server.models.Park;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedPaddocks", types = Paddock.class)
public interface EmbedPaddocks {

    Long getId();
    String getName();
    int getCapacity();
    int getSecurityLevel();
    String getType();
    boolean getIsRampaging();
    Dinosaur getDinosaurs();
    Park getPark();

}
