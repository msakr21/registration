import React from 'react';
import { Button } from '@mui/material';

function AdminEnrollmentIndex() {
  const enrollments = JSON.parse(document.getElementById("data").getAttribute("enrollments"));
  
  function AtCapacity(limit,number) {
    if (limit > number) {
      return false;
    } else {
      return true;
    }
  };

  function URISetter(main,id,sub,page) {
    return `/${main}/${id}/${sub}${page}`
  }

  const listEnrollments = enrollments.map((enrollment) => 
  <div key={enrollment.id}>
  <p>Location: {enrollment.location}</p>
  <p>Schedule: {enrollment.schedule}</p>
  <p>Student Limit: {enrollment.student_limit}</p>
  <p>Number of Students: {enrollment.students}</p>
  <Button disabled={AtCapacity(enrollment.student_limit,enrollment.students)} href={URISetter("enrollments",enrollment.id,"students/","new")}>Register new student for this session</Button>
  <Button href={URISetter("admin/enrollments",enrollment.id,"edit","")}>Edit Session</Button>
  <Button href={URISetter("admin/enrollments",enrollment.id,"","")}>Show Session Details</Button>
  <Button href={URISetter("admin/enrollments",enrollment.id,"delete","")}>Delete Session</Button>
  </div>
  );

  return <div>
          <a href={"/admin/enrollments/new"}>New Enrollment Session</a>
          <br></br>
          <h3>Available Enrollment Sessions:</h3>
           {listEnrollments}
         </div>
}

export default AdminEnrollmentIndex;