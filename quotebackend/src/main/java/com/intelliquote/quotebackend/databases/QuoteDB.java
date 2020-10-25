package com.intelliquote.quotebackend.databases;

import com.intelliquote.quotebackend.entities.Quote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface QuoteDB extends JpaRepository<Quote, Integer> {
    @Query("select q from Quote q where lower(q.author) like lower(concat('%', ?1, '%'))"
            + " or q.quoteContent like lower(concat('%', ?1, '%'))")
    List<Quote> search(String searchTerm);
}
