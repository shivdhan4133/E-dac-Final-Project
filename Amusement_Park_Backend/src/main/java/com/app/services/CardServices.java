package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customexceptions.ResourceNotFoundException;
import com.app.pojos.Card;
import com.app.repository.CardRepository;

@Service
@Transactional
public class CardServices implements ICardServices {

	@Autowired
	private CardRepository cardRepository;

	@Override
	public Card fetchCard(String nameoncard, String cardno, int pin) {

		return cardRepository.fetchCard(nameoncard, cardno, pin)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Credentials"));

	}

}
