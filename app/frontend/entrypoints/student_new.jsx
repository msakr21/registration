import React from 'react';
import ReactDOM from 'react-dom/client';

import NewStudent from '~/components/students/New.jsx';

const container = document.getElementById('new')
const root = ReactDOM.createRoot(container);
root.render(<NewStudent />);