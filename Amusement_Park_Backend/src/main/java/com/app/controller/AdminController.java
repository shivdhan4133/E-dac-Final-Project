package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.pojos.Admin;
import com.app.repository.AdminRepository;
import com.app.services.IAdminServices;

@CrossOrigin
@RestController
@RequestMapping("adminlogin12345")
public class AdminController {

	@Autowired
	private IAdminServices adminService;
	@Autowired
	private AdminRepository adminRepository;

	@PostMapping("/login")
	public ResponseEntity<?> adminLogin(@RequestBody LoginRequest lreq) {

		return new ResponseEntity<>(adminService.authenticateAdmin(lreq.getEmail(), lreq.getPassword()), HttpStatus.OK);

	}

	@PostMapping("/register")
	public Admin addAdmin(@RequestBody Admin admin) {

		return adminRepository.save(admin);

	}

}
