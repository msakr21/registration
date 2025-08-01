import React from 'react';
import ReactDOM from 'react-dom/client';
import EnrollmentForm from '~/components/Enrollment/AdminOnly/EnrollmentForm';

const enrollmentID = document.getElementById("data").getAttribute("enrollmentID");
const location = document.getElementById("data").getAttribute("location");
const startTime = new Date(document.getElementById("data").getAttribute("start_time"));
const endTime = new Date(document.getElementById("data").getAttribute("end_time"));
const students = document.getElementById("data").getAttribute("students");
const uri = `/admin/enrollments/${enrollmentID}`;

const container = document.getElementById('edit');
const root = ReactDOM.createRoot(container);

root.render(
  <EnrollmentForm
    location={location}
    startTime={startTime}
    endTime={endTime}
    students={students}
    path={uri}
    method="patch"
    admin="admin"
  />
);