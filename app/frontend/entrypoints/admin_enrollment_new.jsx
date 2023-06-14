import React from 'react';
import ReactDOM from 'react-dom/client';

import EnrollmentForm from '~/components/EnrollmentForm.jsx'

const container = document.getElementById('new')
const root = ReactDOM.createRoot(container);
root.render(<EnrollmentForm location={"Smoky Hill"} schedule={new Date()} students={20} path={"/admin/enrollments"} method={"post"}/>);