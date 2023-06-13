import React from 'react';
import ReactDOM from 'react-dom/client';

import AdminEnrollmentIndex from '~/components/admin/enrollments/Index.jsx';

const container = document.getElementById('index')
const root = ReactDOM.createRoot(container);
root.render(<AdminEnrollmentIndex />);