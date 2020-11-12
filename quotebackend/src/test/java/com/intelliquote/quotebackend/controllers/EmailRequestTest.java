package com.intelliquote.quotebackend.controllers;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class EmailRequestTest {

    @Test
    void testConstructior(){
        EmailRequest emailRequest = new EmailRequest("Test", "2", "A");
        assertEquals("Test", emailRequest.getEmail());
        assertEquals("2", emailRequest.getInterval());
        assertEquals("A", emailRequest.getPersonalityType());
    }

    @Test
    void getEmail() {
        EmailRequest emailRequest = new EmailRequest("Test", "2", "A");
        assertEquals("Test", emailRequest.getEmail());
    }

    @Test
    void getInterval() {
        EmailRequest emailRequest = new EmailRequest("Test", "2", "A");
        assertEquals("2", emailRequest.getInterval());
    }

    @Test
    void getPersonalityType() {
        EmailRequest emailRequest = new EmailRequest("Test", "2", "A");
        assertEquals("A", emailRequest.getPersonalityType());
    }
}
