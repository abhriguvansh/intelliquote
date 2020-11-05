package com.intelliquote.quotebackend.handlers;

import com.intelliquote.quotebackend.databases.QuoteDB;
import com.intelliquote.quotebackend.entities.Quote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class QuoteHandler {
    @Autowired
    private QuoteDB quoteDB;

    public List<Quote> search(String searchTerm) {
        if (searchTerm == null) {
            throw new IllegalArgumentException("Must enter search term");
        }
        else {
            return quoteDB.search(searchTerm);
        }
    }

    public List<Quote> getRandom() {
        Random rand = new Random();
        List<Quote> q = new ArrayList<>();
        q.add(quoteDB.findById(rand.nextInt(quoteDB.totalQuotes())+1)
                .orElseThrow(() -> new RuntimeException("An error has occurred")));
        return q;
    }
}
