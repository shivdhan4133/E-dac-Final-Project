package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customexceptions.ResourceNotFoundException;
import com.app.pojos.Admin;
import com.app.repository.AdminRepository;

@Service
@Transactional
public class AdminServices implements IAdminServices {

	@Autowired
	private AdminRepository adminRepo;
	
	@Override
	public Admin authenticateAdmin(String email, String password) {
	
		return adminRepo.validateAdmin(email, password).orElseThrow(()->new ResourceNotFoundException("Invalid Credentials"));
		
	}

}
