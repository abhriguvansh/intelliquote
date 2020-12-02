package com.intelliquote.quotebackend.databases;

import com.intelliquote.quotebackend.entities.Quote;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class LoadQuotesDB {
    private List<Quote> quotes = new ArrayList<>();
    private static final Logger log = LoggerFactory.getLogger(LoadQuotesDB.class);

    public LoadQuotesDB() {}

    @Bean
    CommandLineRunner initDatabase(QuoteDB quoteDB) throws IOException {
        this.quotes = LoadQuotesDB.readQuotes();
        return args -> {
            for (Quote quote : quotes) {
                log.info("Loading " + quoteDB.save(quote));
            }
        };
    }

    static ArrayList<Quote> readQuotes() throws IOException {
        InputStream file = new ClassPathResource("quotes.txt").getInputStream();
        BufferedReader br = new BufferedReader(new InputStreamReader(file));

        ArrayList<Quote> list = new ArrayList<>();
        String quoteWithAuthor;
        while ((quoteWithAuthor = br.readLine()) != null) {
            int separator = quoteWithAuthor.lastIndexOf(" - ");

            String quote, author, personality;

            if (separator >= 1) {
                quote = quoteWithAuthor.substring(0, separator)
                        .trim();
                author = quoteWithAuthor.substring(separator + 2)
                        .trim();
            }
            else {
                quote = quoteWithAuthor.trim();
                author = "Unknown";
            }
            if(!author.equals("Unknown")){
                author = author.split("\\|")[0].trim();
                char p = quoteWithAuthor.charAt(quoteWithAuthor.length()-1);
                personality = Character.toString(p);
            }
            else {
                personality = quoteWithAuthor.split("\\|")[0].trim();
            }

            Quote quote1 = new Quote(author, quote, personality);
            quote1.setApproved();
            list.add(quote1);
        }
        return list;
    }
}
