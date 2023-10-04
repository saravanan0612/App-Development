package com.coursemanagement.controller;

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

import com.coursemanagement.model.CourseInfo;
import com.coursemanagement.service.CourseService;
import com.fasterxml.jackson.core.JsonProcessingException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/courses")
public class CourseController {
	@Autowired
	CourseService courseService;
	@GetMapping()
	public List<CourseInfo> getDetails()
	{
		return courseService.getDetails();
	}
//	@DeleteMapping("/delete/{id}")
//	public String deleteDetails(@PathVariable("id") Long id) {
//		return courseService.deleteDetails(id);
//	}
//
//	@PostMapping("/post")
//	public CourseInfo postDetails(@RequestBody CourseInfo x)
//	{
//		return courseService.postDetails(x);
//	}
//	
//	@PutMapping("/put/{id}")
//	public CourseInfo updateCourseDetails(@RequestBody CourseInfo x)
//	{
//		return courseService.updateCourseDetails(x);
//	}
//	@GetMapping(value = "/sortcourse/{field}")
//	Iterable<CourseInfo> employeesSort(@PathVariable ("field") String field) {
//		return courseService.sortEmployees(field);
//	}
//	@GetMapping(value = "/pagingCourse/{pageNo}/{pageSize}")
//	Page<CourseInfo> employeesPaging(@PathVariable ("pageNo") int pageno,@PathVariable ("pageSize") int pageSize) {
//		return courseService.pagingEmployees(pageno, pageSize);
//	}
//	@GetMapping(value = "/pagingSortingCourse/{pageNo}/{pageSize}/{field}")
//	Page<CourseInfo> employeesPagingAndSorting(@PathVariable ("pageNo") int pageno,@PathVariable ("pageSize") int pageSize,@PathVariable ("field")String field) {
//		return courseService.pagingAndSortingEmployees(pageno, pageSize,field);
//	}
	@Operation(summary="Create a new course")
	@ApiResponses(value= {@ApiResponse(responseCode="201",description="course created successfully"),
			@ApiResponse(responseCode="400",description="course is invalid")})
    @ResponseStatus(HttpStatus.CREATED)
	@PostMapping()
	public ResponseEntity<CourseInfo>create(final @RequestBody CourseInfo courseInfo)
	{
		CourseInfo createCourse=courseService.create(courseInfo);
				return ResponseEntity.ok(createCourse);
	}
	
	
	
	
	
	  @Operation(summary = "Get an course with given id")
	  @ApiResponses(value = {@ApiResponse(responseCode = "200" , description = "getting course successful"),
	               @ApiResponse(responseCode = "401" , description = "Invalid credentials"),
	               @ApiResponse(responseCode = "404" , description = "course not  found")
	  })
	  
	  @GetMapping(value = "/{id}" , produces = "application/json")
	  public ResponseEntity<Optional<CourseInfo>> getCourseById (final @PathVariable Long id){
	    Optional<CourseInfo> createdCourse   = courseService.getCourseById(id);
	    return ResponseEntity.ok(createdCourse);
	  }
	  
	  
	  //update
	  
	  @Operation(summary = "Updates course records by given id")
	  @ApiResponses(value = {
	      @ApiResponse(responseCode = "201", description = "Record was updated successfully!"),
	      @ApiResponse(responseCode = "400", description = "Could not update course record")
	  })
	  @ResponseStatus(HttpStatus.OK)
	  @PutMapping(value = "/{id}", produces = "application/json")
	  public void update(final @RequestBody CourseInfo new_record, @PathVariable("id") Long id) {
	    
	    courseService.update(new_record, id);
	  }
	  //delete
	  @Operation(summary = "Deletes a  course BY GIVEN ID")
	  @ApiResponses(value = {@ApiResponse(responseCode = "201",description = "course deleted successfully"),
	       @ApiResponse(responseCode = "401" , description = "Invalid credentials"),
	         @ApiResponse(responseCode = "404" , description = "course not  found")
	  })
	  @ResponseStatus(HttpStatus.OK)
	  @DeleteMapping("/{id}")
	  public void  delete (final @PathVariable("id") Long id)
	  {
	    courseService.delete(id);
	  }
}
