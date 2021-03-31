package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.BookingForm;

public interface BookingRepository extends JpaRepository<BookingForm,Integer> {

}
