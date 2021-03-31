package com.app.dto;

public class CartDto {

	private Integer userId, rideId;

	public CartDto() {
		// TODO Auto-generated constructor stub
	}

	public CartDto(Integer userId, Integer rideId) {
		super();
		this.userId = userId;
		this.rideId = rideId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getRideId() {
		return rideId;
	}

	public void setRideId(Integer rideId) {
		this.rideId = rideId;
	}

	@Override
	public String toString() {
		return "CartDto [userId=" + userId + ", rideId=" + rideId + "]";
	}
	

}
