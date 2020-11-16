package com.intelliquote.quotebackend.controllers;

import com.intelliquote.quotebackend.Requests.SuggestedQuoteRequest;
import com.intelliquote.quotebackend.databases.QuoteDB;
import com.intelliquote.quotebackend.entities.Quote;
import com.intelliquote.quotebackend.handlers.QuoteHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class QuoteController {
    @Autowired
    private QuoteHandler quoteHandler;
    @Autowired
    private QuoteDB quoteDB;

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

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/getRandom")
    public List<Quote> getRandom() {
        return quoteHandler.getRandom();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/api/suggestQuote")
    public List<Quote> suggestQuote(@RequestBody SuggestedQuoteRequest suggestedQuote) {
        Quote quote = new Quote(suggestedQuote.getAuthor(), suggestedQuote.getQuoteContent(), suggestedQuote.getPersonalityType());
        List<Quote> response = new ArrayList<>(1);
        response.add(quoteHandler.suggestQuote(quote));
        return response;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/api/addFlag/{id}")
    public Quote addFlag(@PathVariable Integer id) {
        Quote currQuote = quoteDB.findById(id).orElseThrow(RuntimeException::new);
        currQuote.setFlag();
        return quoteDB.save(currQuote);
    }
}
