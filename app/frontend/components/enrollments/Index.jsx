import React, { useState } from 'react';

function EnrollmentIndex() {
  const enrollments = JSON.parse(document.getElementById("data").getAttribute("enrollments"));
  
  return <div>
           {enrollments.map(enrollment => <div> <p> Enrollment: {enrollment.id} </p> <p> Location: {enrollment.location} </p> <p> Schedule: {enrollment.schedule} </p></div>)}
         </div>
}

export default EnrollmentIndex;