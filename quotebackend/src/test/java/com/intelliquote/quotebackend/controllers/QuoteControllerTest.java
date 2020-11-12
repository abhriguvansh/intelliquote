package com.intelliquote.quotebackend.controllers;

import com.intelliquote.quotebackend.entities.Quote;
import com.intelliquote.quotebackend.handlers.QuoteHandler;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.willReturn;

class QuoteControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    QuoteHandler quoteHandler;

    //@Test
//    void search() {
//        Quote q = new Quote("Author", "Content", "T");
//
//        List<Quote> searchedQuotes = Arrays.asList(q);
//        given(quoteHandler.search("Author").willReturn(searchedQuotes));
//    }

    @Test
    void getAll() {
    }

    @Test
    void getRandom() {
    }
}
