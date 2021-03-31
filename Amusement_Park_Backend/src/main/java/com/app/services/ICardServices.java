package com.app.services;

import com.app.pojos.Card;

public interface ICardServices {

	public Card fetchCard(String nameoncard,String cardno,int pin);
	
}
