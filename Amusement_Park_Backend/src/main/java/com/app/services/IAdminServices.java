package com.app.services;

import com.app.pojos.Admin;

public interface IAdminServices {

	public Admin authenticateAdmin(String email,String password);
	
}
