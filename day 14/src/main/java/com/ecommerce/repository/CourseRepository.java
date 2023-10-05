package com.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;

import com.ecommerce.entity.CourseInfo;
@Repository
public interface CourseRepository extends JpaRepository<CourseInfo, Long>{

}
