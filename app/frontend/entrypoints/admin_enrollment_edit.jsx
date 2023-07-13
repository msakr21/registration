import React from 'react';
import ReactDOM from 'react-dom';
import EnrollmentForm from '~/components/EnrollmentForm';

const enrollment_id = document.getElementById("data").getAttribute("enrollmentID");
const location = document.getElementById("data").getAttribute("location");
const schedule = new Date(document.getElementById("data").getAttribute("schedule"));
const students = document.getElementById("data").getAttribute("students");
const uri = `/admin/enrollments/${enrollment_id}`;

const container = document.getElementById('edit');

ReactDOM.render(
  <EnrollmentForm
    location={location}
    schedule={schedule}
    students={students}
    path={uri}
    method="patch"
  />,
  container
);
