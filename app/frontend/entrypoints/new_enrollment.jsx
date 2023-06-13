import React from 'react';
import ReactDOM from 'react-dom/client';

import NewEnrollment from '~/components/enrollments/New.jsx';

const container = document.getElementById('new_enrollment')
const root = ReactDOM.createRoot(container);
root.render(<NewEnrollment />);