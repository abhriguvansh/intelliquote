package com.intelliquote.quotebackend;

import com.intelliquote.quotebackend.controllers.EmailController;
import com.intelliquote.quotebackend.Requests.EmailRequest;
import com.intelliquote.quotebackend.controllers.QuoteController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class QuotebackendApplicationTests {

	@Autowired
	private EmailController emailController;

	@Autowired
	private QuoteController quoteController;

	@Test
	void contextLoads() throws Exception {
		assertThat(emailController).isNotNull();
		assertThat(quoteController).isNotNull();
	}

	@Test
	void testConstructor(){
		EmailRequest emailRequest = new EmailRequest("Test", "2", "A");
		assertEquals("Test", emailRequest.getEmail());
		assertEquals("2", emailRequest.getInterval());
		assertEquals("A", emailRequest.getPersonalityType());
	}

	@Test
	void getEmail() {
		EmailRequest emailRequest = new EmailRequest("Test", "2", "A");
		assertEquals("Test", emailRequest.getEmail());
	}

	@Test
	void getInterval() {
		EmailRequest emailRequest = new EmailRequest("Test", "2", "A");
		assertEquals("2", emailRequest.getInterval());
	}

	@Test
	void getPersonalityType() {
		EmailRequest emailRequest = new EmailRequest("Test", "2", "A");
		assertEquals("A", emailRequest.getPersonalityType());
	}
}
