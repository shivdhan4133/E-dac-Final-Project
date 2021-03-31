package com.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.app.dto.CartDto;
import com.app.dto.LoginRequest;
import com.app.pojos.Rides;
import com.app.pojos.User;
import com.app.repository.RidesRepository;
import com.app.repository.UserRepository;
import com.app.services.IUserServices;

@CrossOrigin
@RestController
@RequestMapping("api")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private IUserServices userService;
	@Autowired
	private RidesRepository rideRepository;

	@GetMapping("/users")
	public List<User> getUsers() {
		return this.userRepository.findAll();
	}

	@GetMapping("/users/{id}")
	User getUserById(@PathVariable Integer id) {
		System.out.println(id);
		return userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("no user with this id" + id));
	}

	@PostMapping("/register")
	public User addUser(@RequestBody User user) {
		return userRepository.save(user);
	}

	@DeleteMapping("/users/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Integer id) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("invalid id"));
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginreq) {
		return new ResponseEntity<>(userService.authenticateUser(loginreq.getEmail(), loginreq.getPassword()),
				HttpStatus.OK);
	}

	@PostMapping("/addtocart")
	public void addToCart(@RequestBody CartDto cartdto) {

		System.out.println(cartdto);
		User user = userRepository.findById(cartdto.getUserId())
				.orElseThrow(() -> new ResourceNotFoundException("invalid id"));
		List<Rides> cart = user.getUserCart();
		Rides ride = rideRepository.findById(cartdto.getRideId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Ride Id"));
		cart.add(ride);
		for (int i = 0; i < cart.size(); i++) {
			System.out.println(cart.get(i));
		}
		user.setUserCart(cart);
		userRepository.save(user);

	}

	@PostMapping("/deletefromcart")
	public String deleteFromCart(@RequestBody CartDto cartdto) {

		User user = userRepository.findById(cartdto.getUserId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid User Id"));
		List<Rides> ridesInCart = user.getUserCart();
		ridesInCart.removeIf(st -> st.getId() == cartdto.getRideId());
		user.setUserCart(ridesInCart);
		userRepository.save(user);

		return "Ride is Deleted";

	}

}
