package com.intelliquote.quotebackend.controllers;

import com.intelliquote.quotebackend.Requests.SuggestedQuoteRequest;
import com.intelliquote.quotebackend.databases.QuoteDB;
import com.intelliquote.quotebackend.databases.SuggestedQuoteDB;
import com.intelliquote.quotebackend.entities.Quote;
import com.intelliquote.quotebackend.handlers.QuoteHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class QuoteController {
    @Autowired
    private QuoteHandler quoteHandler;
    @Autowired
    private QuoteDB quoteDB;
    @Autowired
    private SuggestedQuoteDB suggestedQuoteDB;

    @GetMapping("/api/search")
    public List<Quote> search(@RequestParam String query) {
        return quoteHandler.search(query);
    }

    @GetMapping("/api/getAll")
    public List<Quote> getAll() {
        return quoteDB.findAll();
    }

    @GetMapping("/api/getRandom")
    public List<Quote> getRandom() {
        return quoteHandler.getRandom();
    }

    @PostMapping("/api/suggestQuote")
    public List<Quote> suggestQuote(@RequestBody SuggestedQuoteRequest suggestedQuote) {
        Quote quote = new Quote(suggestedQuote.getAuthor(), suggestedQuote.getQuoteContent(), suggestedQuote.getPersonalityType());
        List<Quote> response = new ArrayList<>(1);
        response.add(quoteHandler.suggestQuote(quote));
        return response;
    }

    @PostMapping("/api/addFlag/{id}")
    public Quote addFlag(@PathVariable Integer id) {
        Quote currQuote = quoteDB.findById(id).orElseThrow(RuntimeException::new);
        currQuote.setFlag();
        return quoteDB.save(currQuote);
    }

    @GetMapping("/api/suggested")
    public List<Quote> getSuggested() {
        return quoteHandler.getSuggested();
    }

    @PostMapping("/api/confirmQuote/{id}")
    public Quote confirmQuote(@PathVariable Integer id) {
        Quote q = suggestedQuoteDB.findById(id).orElseThrow(RuntimeException::new);
        suggestedQuoteDB.deleteById(id);
        q.setApproved();
        return quoteDB.save(q);
    }

    @PostMapping("/api/rejectQuote/{id}")
    public void rejectQuote(@PathVariable Integer id){
        suggestedQuoteDB.deleteById(id);
    }

    @GetMapping("/api/flagged")
    public List<Quote> getFlagged() {
        return quoteHandler.getFlagged();
    }

    @PostMapping("/api/resetFlags{id}")
    public void resetFlag(@PathVariable Integer id) {
        Quote q = quoteDB.findById(id).orElseThrow(RuntimeException::new);
        q.resetFlags();
    }

    @PostMapping("/api/removeFlaggedQuote{id}")
    public void removeFlaggedQuote(@PathVariable Integer id) {
        quoteDB.deleteById(id);
    }
}
