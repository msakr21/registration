import React from 'react';
import ReactDOM from 'react-dom/client';
import DuplicatePage from '~/components/Duplicate/DuplicatePage';

const container = document.getElementById('duplicate');
const root = ReactDOM.createRoot(container);

root.render(<DuplicatePage />);