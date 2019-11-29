package com.codeclan.server.projections;

import com.codeclan.server.models.Paddock;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedDinosaurs", types = Paddock.class)
public interface EmbedDinosaurs {

    Long getId();
    String getSpecies();
    String getDiet();
    int getHunger();
    String getName();
    int getThreatLevel();
    Paddock getPaddock();

}
