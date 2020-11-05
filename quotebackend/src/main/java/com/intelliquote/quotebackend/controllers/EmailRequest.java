package com.intelliquote.quotebackend.controllers;

public class EmailRequest {
    private String email;
    private String interval;
    private String personalityType;

    public EmailRequest(String email, String interval, String personalityType) {
        this.email = email;
        this.interval = interval;
        this.personalityType = personalityType;
    }

    public String getEmail() {
        return email;
    }

    public String getInterval() {
        return interval;
    }

    public String getPersonalityType() {
        return personalityType;
    }
}
