package com.app.pojos;
//id,fullname,address,mobnum,email,dob,password

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "user")
public class User extends BaseEntity {

	private String name, password, city, state, mobileNumber;
	@Column(unique = true)
	private String email;
	@JsonIgnore
	@ElementCollection
	@CollectionTable(name = "cards", joinColumns = @JoinColumn(name = "user_id"))
	private List<Card> cards = new ArrayList<Card>();
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;
	@Column
	private int pinCode;
	@ManyToMany (fetch = FetchType.EAGER)
	private List<Rides> userCart;

	@Column(length = 30, nullable = false)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(nullable = false)
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@Column
	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	@Column(length = 10, nullable = false)
	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	@Column
	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	@Column
	public int getPinCode() {
		return pinCode;
	}

	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}

	public List<Card> getCards() {
		return cards;
	}

	public void setCards(List<Card> cards) {
		this.cards = cards;
	}

	public List<Rides> getUserCart() {
		return userCart;
	}

	public void setUserCart(List<Rides> userCart) {
		this.userCart = userCart;
	}



}
