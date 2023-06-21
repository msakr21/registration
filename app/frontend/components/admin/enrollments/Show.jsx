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
      <p><b>Location:</b> {enrollment.location}</p>
      <p><b>Schedule:</b> {enrollment.schedule}</p>
      <p><b>Student Limit:</b> {enrollment.student_limit}</p>
      <p><b>Number of Students:</b> {students.length}</p>

      {enrolledStudents(students)}
      
      <Button disabled={isAtCapacity(enrollment.student_limit, students.length)} href={URISetter("enrollments", enrollment.id, "students/", "new")}>Register new student for this session</Button>
      <Button href={URISetter("admin/enrollments", enrollment.id, "edit", "")}>Edit Session</Button>
      <Button href={URISetter("admin/enrollments", enrollment.id, "", "")}>Show Session Details</Button>
      <Button href={URISetter("admin/enrollments", enrollment.id, "delete", "")}>Delete Session</Button>
    </div>
  );

  const enrolledStudents = (students) => {
    return (
      <div>
        <h4>Enrolled Students:</h4>
        <ol>
        {students.map((student, index) => (
          <li key={index}>
            <p><b>First Name:</b> {student.first_name}</p>
            <p><b>Last Name:</b> {student.last_name}</p>
            <p><b>Email:</b> {student.email}</p>
            <p><b>Phone:</b> {student.phone}</p>
          </li>
        ))}
        </ol>
      </div>
    );
  }

  return (
    <div>
      <Button href={"/admin/enrollments/new"}>New Enrollment Session</Button>
      <h3>Available Enrollment Sessions:</h3>
      {showEnrollment(enrollment, students)}
    </div>
  );
}

export default AdminEnrollmentShow;
