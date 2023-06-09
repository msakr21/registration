import React from 'react';
import ReactDOM from 'react-dom/client';

import EnrollmentIndex from '~/components/enrollments/Index.jsx';

const container = document.getElementById('index')
const root = ReactDOM.createRoot(container);
root.render(<EnrollmentIndex />);