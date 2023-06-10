import React from 'react';
import { Button } from '@mui/material';

function EnrollmentIndex() {
  const enrollments = JSON.parse(document.getElementById("data").getAttribute("enrollments"));
  
  function AtCapacity(limit,number) {
    if (limit > number) {
      return false;
    } else {
      return true;
    }
  };

  function URISetter(id) {
    return `/enrollments/${id}/students/new`
  }

  const listEnrollments = enrollments.map((enrollment) => 
  <div key={enrollment.id}>
  <p>Location: {enrollment.location}</p>
  <p>Schedule: {enrollment.schedule}</p>
  <Button disabled={AtCapacity(enrollment.student_limit,enrollment.students)} href={URISetter(enrollment.id)}>Register for this session</Button>
  </div>
  );

  return <div>
           {listEnrollments}
         </div>
}

export default EnrollmentIndex;