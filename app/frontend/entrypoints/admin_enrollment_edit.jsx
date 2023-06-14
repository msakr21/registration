import React from 'react';
import ReactDOM from 'react-dom/client';

import EnrollmentForm from '~/components/EnrollmentForm.jsx'

const enrollment_id = document.getElementById("data").getAttribute("enrollmentID")
const location = document.getElementById("data").getAttribute("location")
const schedule = new Date(document.getElementById("data").getAttribute("schedule"))
const students = document.getElementById("data").getAttribute("students")
const uri = `/admin/enrollments/${enrollment_id}`

const container = document.getElementById('edit')
const root = ReactDOM.createRoot(container);
root.render(<EnrollmentForm location={location} schedule={schedule} students={students} path={uri} method={"patch"}/>);