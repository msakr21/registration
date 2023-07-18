import React from 'react';
import ReactDOM from 'react-dom/client';
import NewStudentForm from '~/components/NewStudentForm';

const container = document.getElementById('new');
const root = ReactDOM.createRoot(container);

root.render(<NewStudentForm admin="/admin" />);