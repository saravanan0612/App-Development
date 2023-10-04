package com.coursemanagement.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coursemanagement.model.UserInfo;
@Repository
public interface UserRepository extends JpaRepository<UserInfo, Long>{
	public Optional findByEmail(String email);
}
