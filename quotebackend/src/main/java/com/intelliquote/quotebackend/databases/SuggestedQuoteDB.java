package com.intelliquote.quotebackend.databases;

import com.intelliquote.quotebackend.entities.Quote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SuggestedQuoteDB extends JpaRepository<Quote, Integer> {

    @Query("select q from Quote q where q.approved = false")
    List<Quote> getAllBySuggested();
}
