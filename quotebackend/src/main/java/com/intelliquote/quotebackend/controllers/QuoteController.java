package com.intelliquote.quotebackend.controllers;

import com.intelliquote.quotebackend.databases.QuoteDB;
import com.intelliquote.quotebackend.entities.Quote;
import com.intelliquote.quotebackend.handlers.QuoteHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class QuoteController {
    @Autowired
    private QuoteHandler quoteHandler;
    @Autowired
    private QuoteDB quoteDB;

    QuoteController(QuoteDB quoteDB, QuoteHandler quoteHandler) {
        this.quoteDB = quoteDB;
        this.quoteHandler = quoteHandler;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/search")
    public List<Quote> search(@RequestParam String query){
        return quoteHandler.search(query);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/getAll")
    public List<Quote> getAll(){
        return quoteDB.findAll();
    }
}
