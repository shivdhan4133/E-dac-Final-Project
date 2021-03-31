package com.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.customexceptions.ResourceNotFoundException;
import com.app.pojos.Rides;
import com.app.repository.RidesRepository;

@CrossOrigin
@RestController
@RequestMapping("/rides")
public class RideController {

	@Autowired
	private RidesRepository rideRepository;

	@GetMapping("/listall")
	public List<Rides> getAllRides() {

		return rideRepository.findAll();

	}
	@GetMapping("/listall/{id}")
	public Rides getRideById(@PathVariable Integer id) {

	return rideRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid Ride Id"));

	}

	@PostMapping("/addride")
	public Rides addRide(@RequestBody Rides ride) {
		return rideRepository.save(ride);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteById(@PathVariable Integer id) {
		Rides rideToDelete = rideRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Ride ID"));
		rideRepository.delete(rideToDelete);
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.putIfAbsent("Deleted", true);
		return ResponseEntity.ok(response);

	}

}
