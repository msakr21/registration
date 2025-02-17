import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from '~/components/HomePage/HomePage';

const container = document.getElementById('home');
const root = ReactDOM.createRoot(container);

root.render(<HomePage admin=""/>);