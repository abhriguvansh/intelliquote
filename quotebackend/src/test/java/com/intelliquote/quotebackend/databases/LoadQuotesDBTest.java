package com.intelliquote.quotebackend.databases;

import com.intelliquote.quotebackend.entities.Quote;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

class LoadQuotesDBTest {

    @BeforeEach
    void setUp() {

    }

//    @Test
//    void readQuotes() throws IOException {
//        LoadQuotesDB loadQuotesDB = new LoadQuotesDB();
//        ArrayList<Quote> actual = loadQuotesDB.readQuotes("ImportQuotesTest.txt");
//        ArrayList<Quote> expected = new ArrayList<>();
//
//        Quote q1 = new Quote("Test Test", "This is a quote.");
//        Quote q2 = new Quote("Author Two", "Quote 2.");
//        Quote q3 = new Quote("Unknown", "This quote does not have an author.");
//        Quote q4 = new Quote("Author Three-three", "Quote 3.");
//
//        expected.add(q1); expected.add(q2); expected.add(q3); expected.add(q4);
//
//        assertEquals(expected.toString(), actual.toString());
//    }
}
