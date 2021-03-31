package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Rides;

public interface RidesRepository extends JpaRepository<Rides,Integer> {
	
}
