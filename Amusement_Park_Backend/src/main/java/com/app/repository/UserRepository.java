package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.User;

public interface UserRepository extends JpaRepository<User,Integer> {

	@Query("select u from User u where u.email=:EML and u.password=:PWD")
	Optional<User> validateUser(@Param("EML")String email,@Param("PWD") String password);

}
