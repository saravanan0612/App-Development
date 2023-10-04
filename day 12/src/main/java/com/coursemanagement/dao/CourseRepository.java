package com.coursemanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;

import com.coursemanagement.model.CourseInfo;
@Repository
public interface CourseRepository extends JpaRepository<CourseInfo, Long>{

}
