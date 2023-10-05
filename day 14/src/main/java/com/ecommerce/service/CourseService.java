package com.ecommerce.service;

import java.util.List; 
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import com.ecommerce.repository.CourseRepository;
import com.ecommerce.entity.CourseInfo;
@Service
public class CourseService {
	@Autowired
	CourseRepository courseRepository;
	public List<CourseInfo> getDetails()
	{
		return courseRepository.findAll();
	}

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
