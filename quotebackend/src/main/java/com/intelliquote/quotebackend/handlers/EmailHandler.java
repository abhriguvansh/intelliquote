package com.intelliquote.quotebackend.handlers;

import com.sendgrid.*;
import java.io.IOException;

public class EmailHandler {
    public void sendEmail(String toEmail){

    }
//    public static void main(String[] args) throws IOException {
//        Email from = new Email("rsh83@case.edu");
//        String subject = "Sending with SendGrid is Fun";
//        Email to = new Email("test@example.com");
//        Content content = new Content("text/plain", "and easy to do anywhere, even with Java");
//        Mail mail = new Mail(from, subject, to, content);
//
//        SendGrid sg = new SendGrid("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");
//        Request request = new Request();
//        try {
//            request.setMethod(Method.POST);
//            request.setEndpoint("mail/send");
//            request.setBody(mail.build());
//            Response response = sg.api(request);
//            System.out.println(response.getStatusCode());
//            System.out.println(response.getBody());
//            System.out.println(response.getHeaders());
//        } catch (IOException ex) {
//            throw ex;
//        }
//    }
}
