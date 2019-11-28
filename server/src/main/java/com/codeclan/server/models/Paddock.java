package com.codeclan.server.models;

public class Paddock {

    private String name;
    private int capacity;
    private int securityLevel;
    private String type;
    private boolean isRampaging;

    public Paddock(String name, int capacity, int securityLevel, String type, boolean isRampaging) {
        this.name = name;
        this.capacity = capacity;
        this.securityLevel = securityLevel;
        this.type = type;
        this.isRampaging = isRampaging;
    }

    public Paddock() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public int getSecurityLevel() {
        return securityLevel;
    }

    public void setSecurityLevel(int securityLevel) {
        this.securityLevel = securityLevel;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean isRampaging() {
        return isRampaging;
    }

    public void setRampaging(boolean rampaging) {
        isRampaging = rampaging;
    }
}
