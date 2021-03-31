package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.app.pojos.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

	@Query("select a from Admin a where a.email=:EML and a.password=:PWD")
	Optional<Admin> validateAdmin(@Param("EML") String email, @Param("PWD") String password);

}
