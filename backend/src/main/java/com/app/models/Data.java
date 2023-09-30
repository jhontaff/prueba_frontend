package com.app.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="data")
public class Data {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Integer id;
	private String location;
	private String local_name;
	private String tenant_name;
	private String state;
	private String commerce_type;
	private String subcategorie;
	
	public Data() {}

	public Data(String location, String local_name, String tenant_name, String state, String commerce_type,
			String subcategorie) {
		super();
		this.location = location;
		this.local_name = local_name;
		this.tenant_name = tenant_name;
		this.state = state;
		this.commerce_type = commerce_type;
		this.subcategorie = subcategorie;
	}

//	public Integer getId() {
//		return id;
//	}
//
//	public void setId(Integer id) {
//		this.id = id;
//	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getLocal_name() {
		return local_name;
	}

	public void setLocal_name(String local_name) {
		this.local_name = local_name;
	}

	public String getTenant_name() {
		return tenant_name;
	}

	public void setTenant_name(String tenant_name) {
		this.tenant_name = tenant_name;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCommerce_type() {
		return commerce_type;
	}

	public void setCommerce_type(String commerce_type) {
		this.commerce_type = commerce_type;
	}

	public String getSubcategorie() {
		return subcategorie;
	}

	public void setSubcategorie(String subcategorie) {
		this.subcategorie = subcategorie;
	}
	
	
	
}
