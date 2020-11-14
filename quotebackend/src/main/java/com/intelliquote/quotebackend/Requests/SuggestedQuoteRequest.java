package com.intelliquote.quotebackend.Requests;

public class SuggestedQuoteRequest {
    private String quoteContent;
    private String author;
    private String personalityType;

    public SuggestedQuoteRequest(String quoteContent, String author, String personalityType) {
        this.quoteContent = quoteContent;
        this.author = author;
        this.personalityType = personalityType;
    }

    public String getQuoteContent() {
        return quoteContent;
    }

    public String getAuthor() {
        return author;
    }

    public String getPersonalityType() {
        return personalityType;
    }
}
