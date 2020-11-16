package com.intelliquote.quotebackend.controllers;

import com.intelliquote.quotebackend.handlers.EmailHandler;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@WebMvcTest(EmailController.class)
class EmailControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private EmailHandler emailHandler;

    @Test
    void sendEmail() {
        
    }
}
