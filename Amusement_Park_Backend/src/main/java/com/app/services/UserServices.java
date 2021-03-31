package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customexceptions.ResourceNotFoundException;
import com.app.pojos.User;
import com.app.repository.UserRepository;

@Service
@Transactional
public class UserServices implements IUserServices {

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User authenticateUser(String email, String password) {

		return userRepo.validateUser(email,password).orElseThrow(() -> new ResourceNotFoundException("Invalid credentials"));
		
	}

}
