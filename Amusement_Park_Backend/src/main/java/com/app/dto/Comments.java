package com.app.dto;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.app.pojos.BaseEntity;

@Entity
@Table
public class Comments extends BaseEntity {

	private String name;
	private String comment;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	
	
	
}
