package com.intelliquote.quotebackend.databases;

import com.intelliquote.quotebackend.entities.Quote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SuggestedQuoteDB extends JpaRepository<Quote, Integer> {
}
