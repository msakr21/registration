import React from 'react';
import ReactDOM from 'react-dom/client';
import EnrollmentForm from '~/components/Enrollment/AdminOnly/EnrollmentForm';

const container = document.getElementById('new');
const root = ReactDOM.createRoot(container);

root.render(
  <EnrollmentForm
    location="Smoky Hill"
    startTime={new Date()}
    endTime={new Date()}
    students={20}
    path="/admin/enrollments"
    method="post"
    admin="admin"
  />
);