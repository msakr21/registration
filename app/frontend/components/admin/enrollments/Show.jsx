import React from 'react';
import { Button } from '@mui/material';

function isAtCapacity(limit, number) {
  return limit <= number;
};

function URISetter(main, id, sub, page) {
  return `/${main}/${id}/${sub}${page}`;
}

function AdminEnrollmentShow() {
  const enrollments = JSON.parse(document.getElementById("data").getAttribute("enrollments"));

  const listEnrollments = enrollments.map(({ id, location, schedule, student_limit, students }) => (
    <div key={id}>
      <p>Location: {location}</p>
      <p>Schedule: {schedule}</p>
      <p>Student Limit: {student_limit}</p>
      <p>Number of Students: {students}</p>
      <Button disabled={isAtCapacity(student_limit, students)} href={URISetter("enrollments", id, "students/", "new")}>Register new student for this session</Button>
      <Button href={URISetter("admin/enrollments", id, "edit", "")}>Edit Session</Button>
      <Button href={URISetter("admin/enrollments", id, "", "")}>Show Session Details</Button>
      <Button href={URISetter("admin/enrollments", id, "delete", "")}>Delete Session</Button>
    </div>
  ));

  return (
    <div>
      <Button href={"/admin/enrollments/new"}>New Enrollment Session</Button>
      <h3>Available Enrollment Sessions:</h3>
      {listEnrollments}
    </div>
  );
}

export default AdminEnrollmentShow;
