package com.codeclan.server.controllers;

import com.codeclan.server.repositories.parks.ParkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/parks")
public class ParkController {

    @Autowired
    ParkRepository parkRepository;
}
