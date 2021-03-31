package com.app.services;

import com.app.pojos.User;

public interface IUserServices {

	User authenticateUser(String email, String password);

	
}
