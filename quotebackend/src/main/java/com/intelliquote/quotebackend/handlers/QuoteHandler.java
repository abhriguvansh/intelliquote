package com.intelliquote.quotebackend.handlers;

import com.intelliquote.quotebackend.databases.QuoteDB;
import com.intelliquote.quotebackend.databases.SuggestedQuoteDB;
import com.intelliquote.quotebackend.entities.Quote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class QuoteHandler {
    @Autowired
    private QuoteDB quoteDB;

    @Autowired
    private SuggestedQuoteDB suggestedQuoteDB;

    public List<Quote> search(String searchTerm) {
        if (searchTerm == null) {
            throw new IllegalArgumentException("Must enter search term");
        }
        else {
            if(searchTerm.length() == 1
                    || searchTerm.equalsIgnoreCase("Agreeableness")
                    || searchTerm.equalsIgnoreCase("conscientiousness")
                    || searchTerm.equalsIgnoreCase("neuroticism")
                    || searchTerm.equalsIgnoreCase("openness")
                    || searchTerm.equalsIgnoreCase("extroversion"))
                return quoteDB.searchByPersonality(searchTerm);
            return quoteDB.search(searchTerm);
        }
    }

    public List<Quote> getRandom() {
        Random rand = new Random();
        List<Quote> q = new ArrayList<>(1);
        q.add(quoteDB.findById(rand.nextInt(quoteDB.totalQuotes())+1)
                .orElseThrow(() -> new RuntimeException("An error has occurred")));
        return q;
    }

    public Quote suggestQuote(Quote quote) {
        List<Quote> allQuotes = quoteDB.findAll();
        if(allQuotes.contains(quote)) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT, "Quote is already in database"
            );
        }
        return suggestedQuoteDB.save(quote);
    }

    public List<Quote> getFlagged(){
        return quoteDB.getQuoteByFlagged();
    }

    public List<Quote> getSuggested() {
        return suggestedQuoteDB.getAllBySuggested();
    }
}
