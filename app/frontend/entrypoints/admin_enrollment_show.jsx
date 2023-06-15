import React from 'react';
import ReactDOM from 'react-dom/client';

import AdminEnrollmentShow from '~/components/admin/enrollments/Show.jsx';

const container = document.getElementById('show')
const root = ReactDOM.createRoot(container);
root.render(<AdminEnrollmentShow />);