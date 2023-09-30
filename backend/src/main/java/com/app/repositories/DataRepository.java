package com.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.models.Data;

@Repository
public interface DataRepository extends JpaRepository<Data, Integer>{


}
