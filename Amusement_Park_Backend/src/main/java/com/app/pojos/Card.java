package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Lazy;
import org.springframework.data.repository.cdi.Eager;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "cards")
public class Card extends BaseEntity{

	private String cardno, nameoncard;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private LocalDate expdate;
	private double balance;
	private int pin;

	@Column(name = "card_num", unique = true, length = 20)
	public String getCardNo() {
		return cardno;
	}

	public void setCardNo(String cardNo) {
		this.cardno = cardNo;
	}

	@Column(length = 20, name = "name")
	public String getnameoncard() {
		return nameoncard;
	}

	public void setnameoncard(String nameoncard) {
		this.nameoncard = nameoncard;
	}

	@Column(name = "exp_date")
	public LocalDate getexpdate() {
		return expdate;
	}

	public void setexpdate(LocalDate expdate) {
		this.expdate = expdate;
	}
	@Column(name="balance")
	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}
	@Column(name="pin")

	public int getPin() {
		return pin;
	}

	public void setPin(int pin) {
		this.pin = pin;
	}

}
