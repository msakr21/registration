import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminEnrollmentShow from '~/components/AdminEnrollmentShow';

const container = document.getElementById('show');
const root = ReactDOM.createRoot(container);

root.render(<AdminEnrollmentShow />);