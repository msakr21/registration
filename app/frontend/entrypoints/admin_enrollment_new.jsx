import React from 'react';
import ReactDOM from 'react-dom';
import EnrollmentForm from '~/components/EnrollmentForm';

const container = document.getElementById('new');

ReactDOM.render(
  <EnrollmentForm
    location="Smoky Hill"
    schedule={new Date()}
    students={20}
    path="/admin/enrollments"
    method="post"
  />,
  container
);
