package com.coursemanagement.service;

import java.util.List; 
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.coursemanagement.dao.CourseRepository;
import com.coursemanagement.model.CourseInfo;
@Service
public class CourseService {
	@Autowired
	CourseRepository courseRepository;
	public List<CourseInfo> getDetails()
	{
		return courseRepository.findAll();
	}
//	public String deleteDetails(Long id)
//	{
//		courseRepository.deleteById(id);
//		return "Id : "+id+" is deleted";
//	}
//	public CourseInfo postDetails(CourseInfo z)
//	{
//		return courseRepository.save(z);
//	}
//	public CourseInfo updateCourseDetails(CourseInfo x)
//	{
//		return courseRepository.save(x);
//	}
//	public Iterable<CourseInfo> sortEmployees(String field) {
//		return courseRepository.findAll(Sort.by(Direction.DESC,field));
//	}
//	public Page<CourseInfo> pagingEmployees(int page,int pageSize) {
//		Pageable paging=PageRequest.of(page,pageSize);
//		return courseRepository.findAll(paging);
//	}
//	public Page<CourseInfo> pagingAndSortingEmployees(int offset,int pageSize,String field) {
//		Pageable paging = PageRequest.of(offset, pageSize).withSort(Sort.by(field));
//		return courseRepository.findAll(paging);
//	}
	public CourseInfo create(CourseInfo courseInfo)
	{
		return courseRepository.save(courseInfo);
	}
	 public Optional<CourseInfo> getCourseById(Long id)
	  {
	    return courseRepository.findById(id);
	  }
	  
	  public String delete(Long id)
	  {
	    courseRepository.deleteById((long) id);
	    return id+" is deleted";
	     
	  }
	  
	  public List<CourseInfo> get()
	  {
	    return courseRepository.findAll();
	  }
	  
	  public CourseInfo update(CourseInfo new_record, Long id) {
		    
		    CourseInfo updateCourse = courseRepository.findById(id).get();
		    
		    if(updateCourse == null)
		    {
		      return updateCourse;
		    }
		    else
		    {
		      updateCourse.setEmail(new_record.getEmail());
		      updateCourse.setPassword(new_record.getPassword());
		      updateCourse.setFirstName(new_record.getFirstName());
		      updateCourse.setLastName(new_record.getLastName());
		      updateCourse.setCoursename(new_record.getCoursename());
		      updateCourse.setDuration(new_record.getDuration());
		      updateCourse.setPrice(new_record.getPrice());
		    }
		    
		    return courseRepository.save(updateCourse);
		  }
}
