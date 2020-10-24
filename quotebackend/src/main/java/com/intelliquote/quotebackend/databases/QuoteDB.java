package com.intelliquote.quotebackend.databases;

import com.intelliquote.quotebackend.entities.Quote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuoteDB extends JpaRepository<Quote, Integer> {
}
