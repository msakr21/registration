import React from 'react';
import { Button } from '@mui/material';

function isAtCapacity(limit, number) {
  return limit <= number;
};

function URISetter(main,id,sub,page) {
  return `/${main}/${id}/${sub}${page}`;
}

function AdminEnrollmentShow() {
  const enrollment = JSON.parse(document.getElementById("data").getAttribute("enrollment"));
  const students = JSON.parse(document.getElementById("data").getAttribute("students"));

  const showEnrollment = (enrollment, students)=> (
    <div key={enrollment.id}>
      <p>Location: {enrollment.location}</p>
      <p>Schedule: {enrollment.schedule}</p>
      <p>Student Limit: {enrollment.student_limit}</p>
      <p>Number of Students: {students.length}</p>
      
      <Button disabled={isAtCapacity(enrollment.student_limit, students.length)} href={URISetter("enrollments", enrollment.id, "students/", "new")}>Register new student for this session</Button>
      <Button href={URISetter("admin/enrollments", enrollment.id, "edit", "")}>Edit Session</Button>
      <Button href={URISetter("admin/enrollments", enrollment.id, "", "")}>Show Session Details</Button>
      <Button href={URISetter("admin/enrollments", enrollment.id, "delete", "")}>Delete Session</Button>
    </div>
  );

  return (
    <div>
      <Button href={"/admin/enrollments/new"}>New Enrollment Session</Button>
      <h3>Available Enrollment Sessions:</h3>
      {showEnrollment(enrollment, students)}
    </div>
  );
}

export default AdminEnrollmentShow;
