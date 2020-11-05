package com.intelliquote.quotebackend.controllers;

import com.intelliquote.quotebackend.entities.Quote;
import com.intelliquote.quotebackend.handlers.EmailHandler;
import com.intelliquote.quotebackend.handlers.QuoteHandler;
import com.sendgrid.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class EmailController {

    @Autowired
    private EmailHandler emailHandler;

    @Autowired
    private QuoteHandler quoteHandler;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/api/emailRequest")
    public Response sendEmail(@RequestBody EmailRequest emailRequest) throws IOException {
        return emailHandler.sendEmail(emailRequest.getEmail(), quoteHandler.getRandom().get(0));
    }
}
