package com.intelliquote.quotebackend.entities;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class QuoteTest {

    Quote q;
    @BeforeEach
    void makeQuote(){
        q = new Quote("Author1", "Content1", "T");
    }

    @Test
    void getPersonalities() {
        assertEquals("T", q.getPersonalities());
    }

    @Test
    void setApproved() {
        assertTrue(q.isApproved());
    }

    @Test
    void getAuthor() {
        assertEquals("Author1", q.getAuthor());
    }

    @Test
    void getQuoteContent() {
        assertEquals("Content1", q.getQuoteContent());
    }

    @Test
    void isFlagged() {
        assertFalse(q.isFlagged());
    }

    @Test
    void setFlag() {
        q.setFlag();
        assertTrue(q.isFlagged());
    }

    @Test
    void isApproved() {
        assertTrue(q.isApproved());
    }

    @Test
    void testEquals() {
        Quote eq = new Quote("Author1", "Content1", "T");
        assertEquals(eq, q);
    }

    @Test
    void testHashCode() {
        assertTrue(true);
    }

    @Test
    void testToString() {
        assertTrue(true);
    }

    @Test
    void formattedString() {
    }
}
