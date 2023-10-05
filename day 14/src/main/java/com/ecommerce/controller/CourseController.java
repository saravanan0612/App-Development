package com.ecommerce.controller;

import java.util.List;    
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


import com.ecommerce.entity.CourseInfo;
import com.ecommerce.service.CourseService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/courses")
public class CourseController {
	@Autowired
	CourseService courseService;
	@GetMapping
	public List<CourseInfo> getDetails()
	{
		return courseService.getDetails();
	}

	@PostMapping("/post")
	public ResponseEntity<CourseInfo>create(final @RequestBody CourseInfo courseInfo)
	{
		CourseInfo createCourse=courseService.create(courseInfo);
				return ResponseEntity.ok(createCourse);
	}

	@GetMapping("/{id}")
	  public ResponseEntity<Optional<CourseInfo>> getCourseById (final @PathVariable Long id){
	    Optional<CourseInfo> createdCourse   = courseService.getCourseById(id);
	    return ResponseEntity.ok(createdCourse);
	  }

	  @PutMapping("/put/{id}")
	  public void update(final @RequestBody CourseInfo new_record, @PathVariable("id") Long id) {
	    
	    courseService.update(new_record, id);
	  }

	  @DeleteMapping("/{id}")
	  public void  delete (final @PathVariable("id") Long id)
	  {
	    courseService.delete(id);
	  }
}
