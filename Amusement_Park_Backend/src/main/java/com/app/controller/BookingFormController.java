package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.customexceptions.ResourceNotFoundException;
import com.app.dto.FormIdDto;
import com.app.dto.PaymentRequest;
import com.app.pojos.BookingForm;
import com.app.pojos.Card;
import com.app.pojos.User;
import com.app.repository.BookingRepository;
import com.app.repository.CardRepository;
import com.app.repository.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/booking")
public class BookingFormController {

	@Autowired
	private BookingRepository bookingRepository;
	@Autowired
	private CardRepository cardRepository;
	@Autowired
	private UserRepository userRepository;

	@PostMapping("/book")
	public void saveBookingForm(@RequestBody BookingForm form) {

		System.out.println(form.getUser());
		bookingRepository.save(form);

	}

	@PostMapping("/pay")
	public ResponseEntity<?> processPayment(@RequestBody PaymentRequest paymentRequest) {
		String message = "Invalid Credentials Aborting Payment";
		PaymentRequest p = paymentRequest;
		Optional<Card> uCard = cardRepository.fetchCard(p.getNameoncard(), p.getCardno(), p.getPin());
		Card card;
		if (uCard.isPresent()) {
			card = uCard.get();
			card.setBalance(card.getBalance() - p.getAmount());
			System.out.println(card.getBalance() + "  " + p.getAmount());
			cardRepository.save(card);
			message = "Payment Succesfull";
			return new ResponseEntity<>(message, HttpStatus.OK);
		} else
			return new ResponseEntity<>(message, HttpStatus.OK);
	}

	@GetMapping("/bookinglist")
	public List<BookingForm> getAllBookings() {

		return bookingRepository.findAll();
	}

	@PostMapping("/getformbyid")
	public ResponseEntity<?> getFormById(@RequestBody FormIdDto formreq) {
		
		int userid=formreq.getUserid();
		
		User user = userRepository.findById(userid)
				.orElseThrow(() -> new ResourceNotFoundException("no user with this id" + userid));
		System.out.println(user.getName());
		List<BookingForm> allForms = bookingRepository.findAll();
		for (BookingForm form : allForms) {
			System.out.println(form.getUser().getId());
							if(form.getUser().getId() == user.getId() ) {
					return new ResponseEntity<>(form,HttpStatus.OK);
				}	
		}
		return new ResponseEntity<>("No Form Found",HttpStatus.OK);
		
	}
}
