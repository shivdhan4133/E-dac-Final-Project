package com.app.pojos;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class BookingForm extends BaseEntity {

	@OneToOne
	private User user;
	@Column
	private LocalDate bookingdate;
	@Column
	private int children;
	@Column
	private int adults;
	@ManyToMany(fetch = FetchType.EAGER)
	private Set<Rides> rides;
	
	public BookingForm() {
		// TODO Auto-generated constructor stub
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getChildren() {
		return children;
	}

	public void setChildren(int children) {
		this.children = children;
	}

	public int getAdults() {
		return adults;
	}

	public void setAdults(int adults) {
		this.adults = adults;
	}

	public LocalDate getBookingdate() {
		return bookingdate;
	}

	public void setBookingdate(LocalDate bookingdate) {
		this.bookingdate = bookingdate;
	}

	public Set<Rides> getRides() {
		return rides;
	}

	public void setRides(Set<Rides> rides) {
		this.rides = rides;
	}

	
	
	


	
	
}
