package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.models.Data;
import com.app.repositories.DataRepository;

@Service
public class DataService {
	
	@Autowired
	DataRepository dataRepository;

	public List<Data> getData(){
		return dataRepository.findAll();
	}
	
	public Data saveData(Data datos) {
		return dataRepository.save(datos);
	}
	
	public Data getDataById(Integer id) {
		return dataRepository.findById(id).get();
	};
	
	
	public void deleteData(Integer id) {
		dataRepository.deleteById(id);
	};
	
	
}
