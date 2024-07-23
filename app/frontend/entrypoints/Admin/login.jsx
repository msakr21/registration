import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginForm from '~/components/LoginForm.jsx';

const container = document.getElementById('login');
const root = ReactDOM.createRoot(container);

root.render(<LoginForm />);