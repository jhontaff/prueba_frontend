package com.app.controllers;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.models.Data;
import com.app.services.DataService;

@CrossOrigin("*")
@RestController
@RequestMapping("/home")
public class DataController {
	
	@Autowired
	DataService dataService;
	
	@GetMapping("/alldata")
	public List<Data> getAllData(){
		return dataService.getData();
	}
	
	@PostMapping("/savedata")
	public ResponseEntity<Data> saveNewData(@RequestBody Data data){
		Data new_data = dataService.saveData(data);
		return new ResponseEntity<>(new_data, HttpStatus.CREATED);
	}
	
	@GetMapping("/data/{id}")
	public ResponseEntity<Data> getOneData(@PathVariable Integer id){
		Data dataById = dataService.getDataById(id);
		return ResponseEntity.ok(dataById);
	}
	
	@PutMapping("/data/{id}")
	public ResponseEntity<Data> update(@PathVariable Integer id, @RequestBody Data data){
		Data dataById = dataService.getDataById(id);
		dataById.setLocation(data.getLocation());
		dataById.setLocal_name(data.getLocal_name());
		dataById.setTenant_name(data.getTenant_name());
		dataById.setState(data.getState());
		dataById.setCommerce_type(data.getCommerce_type());
		dataById.setSubcategorie(data.getSubcategorie());
		
		Data updated_data = dataService.saveData(dataById);
		return new ResponseEntity<>(updated_data, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/data/{id}")
	public ResponseEntity<HashMap<String, Boolean>> deleteOneData(@PathVariable Integer id) {
		this.dataService.deleteData(id);
		HashMap<String, Boolean> deletedData = new HashMap<>();
		deletedData.put("Eliminado", true);
		return ResponseEntity.ok(deletedData);
	}
}
