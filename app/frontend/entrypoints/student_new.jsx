import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentForm from '~/components/StudentForm';

const container = document.getElementById('new');
const root = ReactDOM.createRoot(container);

root.render(<StudentForm admin="" />);