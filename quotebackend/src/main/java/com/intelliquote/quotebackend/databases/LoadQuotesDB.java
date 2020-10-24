package com.intelliquote.quotebackend.databases;

import com.intelliquote.quotebackend.entities.Quote;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class LoadQuotesDB {
    private List<Quote> quotes = new ArrayList<>();

    public LoadQuotesDB(){}

    @Bean
    CommandLineRunner initDatabase(QuoteDB quoteDB) throws IOException {
        quotes = readQuotes("quotes.txt");

        return args -> {
            for (Quote quote : quotes) {
                quoteDB.save(quote);
            }
        };
    }

    ArrayList<Quote> readQuotes(String fileName) throws IOException {
        URL url = getClass().getResource(fileName);
        File quotesFile = new File(url.getPath());

        BufferedReader br = new BufferedReader(new FileReader(quotesFile));

        ArrayList<Quote> list = new ArrayList<>();
        String quoteWithAuthor;
        while ((quoteWithAuthor = br.readLine()) != null) {
            int separator = quoteWithAuthor.lastIndexOf(" - ");

            if (separator >= 1) {
                String quote = quoteWithAuthor.substring(0, separator)
                        .trim();
                String author = quoteWithAuthor.substring(separator + 2)
                        .trim();

                Quote quote1 = new Quote(author, quote);
                list.add(quote1);
            }
            else {
                String quote = quoteWithAuthor.trim();
                String author = "Unknown";

                Quote quote1 = new Quote(author, quote);
                list.add(quote1);
            }
        }
        return list;
    }
}
