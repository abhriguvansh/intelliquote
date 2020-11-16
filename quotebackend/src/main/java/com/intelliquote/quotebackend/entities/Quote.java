package com.intelliquote.quotebackend.entities;

import javax.persistence.*;
import java.util.*;

@Entity
public class Quote {

    private @Id @GeneratedValue Integer id;
    private String author;
    @Column(length = 1000)
    private String quoteContent;
    private int flags = 0;
    private boolean approved = false;
    String personalities;

    public Quote(){}

    public Quote(String author, String quoteContent, String personalities) {
        this.author = author;
        this.quoteContent = quoteContent;
        this.personalities = personalities;
    }

    public String getPersonalities() {
        return personalities;
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
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Quote quote = (Quote) o;
        return author.equals(quote.author) &&
                quoteContent.equals(quote.quoteContent);
    }

    @Override
    public int hashCode() {
        return Objects.hash(author, quoteContent);
    }

    @Override
    public String toString() {
        return "Quote{" +
                "id=" + id +
                ", author='" + author + '\'' +
                ", quoteContent='" + quoteContent + '\'' +
                ", flags=" + flags +
                ", approved=" + approved +
                ", personality=" + personalities +
                '}';
    }
    public String formattedString() {
        return quoteContent + " - " + author;
    }
}
