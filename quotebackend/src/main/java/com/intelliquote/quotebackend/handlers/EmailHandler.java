package com.intelliquote.quotebackend.handlers;

import com.intelliquote.quotebackend.entities.Quote;
import com.sendgrid.*;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class EmailHandler {
    public Response sendEmail(String toEmail, Quote quote) throws IOException {
        Email from = new Email("rsh83@case.edu");
        String subject = "Your quote from Intelliquote";
        Email to = new Email(toEmail);
        Content content = new Content("text/plain", quote.formattedString());
        Mail mail = new Mail(from, subject, to, content);

        SendGrid sg = new SendGrid("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");
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            Response response = sg.api(request);
            System.out.println(response.getStatusCode());
            System.out.println(response.getBody());
            System.out.println(response.getHeaders());
            return response;
        } catch (IOException ex) {
            throw ex;
        }
    }
}
