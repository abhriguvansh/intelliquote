package com.intelliquote.quotebackend.entities;

import javax.persistence.*;
import java.util.*;

@Entity
public class Quote {

    private @Id @GeneratedValue Integer id;
    private String author;
    private String quoteContent;
    private int flags = 0;
    private boolean approved;

    public Quote(){}

    public Quote(String author, String quoteContent) {
        this.author = author;
        this.quoteContent = quoteContent;
    }

    public void setApproved() {
        this.approved = true;
    }

    public String getAuthor() {
        return author;
    }

    public String getQuoteContent() {
        return quoteContent;
    }

    public boolean isFlagged(){
        return flags > 0;
    }

    public void setFlag() {
        this.flags++;
    }

    public boolean isApproved() {
        return approved;
    }

    public Integer getId() {
        return id;
    }

    @Override
    public String toString(){
        return this.quoteContent + " - " + this.author;
    }
}
