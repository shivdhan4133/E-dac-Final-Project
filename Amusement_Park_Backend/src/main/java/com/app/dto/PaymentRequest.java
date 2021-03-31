package com.app.dto;

import java.time.LocalDate;

public class PaymentRequest {

	private String nameoncard,cardno;
	private LocalDate expdate;
	private int pin;
	private int amount;
	
	public PaymentRequest(String nameoncard, String cardno, LocalDate expdate, int pin, int amount) {
		super();
		this.nameoncard = nameoncard;
		this.cardno = cardno;
		this.expdate = expdate;
		this.pin = pin;
		this.amount = amount;
	}

	public String getNameoncard() {
		return nameoncard;
	}

	public void setNameoncard(String nameoncard) {
		this.nameoncard = nameoncard;
	}

	public String getCardno() {
		return cardno;
	}

	public void setCardno(String cardno) {
		this.cardno = cardno;
	}

	public LocalDate getExpdate() {
		return expdate;
	}

	public void setExpdate(LocalDate expdate) {
		this.expdate = expdate;
	}

	public int getPin() {
		return pin;
	}

	public void setPin(int pin) {
		this.pin = pin;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}
	
	
	
	
	
}
