import React from 'react';
import ReactDOM from 'react-dom/client';
// import.meta.globEager('../components/**/*_component.js')


import NewEnrollment from '~/components/NewEnrollment';
// import EnrollmentIndex from '~/components/EnrollmentIndex';

const container = document.getElementById('enrollment')
const root = ReactDOM.createRoot(container);
root.render(<NewEnrollment />);

