package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Card;

public interface CardRepository extends JpaRepository<Card, Integer> {

	@Query("select c from Card c where c.nameoncard=:NAME and c.cardno=:CDNO and c.pin=:CPIN")
	Optional<Card> fetchCard(@Param("NAME") String name,@Param("CDNO") String cardno,@Param("CPIN") int pin);
	
}
