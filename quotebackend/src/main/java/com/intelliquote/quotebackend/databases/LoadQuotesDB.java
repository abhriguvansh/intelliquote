package com.intelliquote.quotebackend.databases;

import com.intelliquote.quotebackend.entities.Quote;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class LoadQuotesDB {
    private List<Quote> quotes = new ArrayList<>();
    private static final Logger log = LoggerFactory.getLogger(LoadQuotesDB.class);

    public LoadQuotesDB() {}

    @Bean
    CommandLineRunner initDatabase(QuoteDB quoteDB) throws IOException {
        this.quotes = LoadQuotesDB.readQuotes("quotes.txt");
        return args -> {
            for (Quote quote : quotes) {
                log.info("Loading " + quoteDB.save(quote));
            }
        };
    }

    static ArrayList<Quote> readQuotes(String pathName) throws IOException {
        File quotesFile = new File("quotebackend/src/main/java/com/intelliquote/quotebackend/databases/quotes.txt");

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
