import React from 'react';
import ReactDOM from 'react-dom/client';
import ConfirmationPage from '~/components/Confirmation/ConfirmationPage';

const container = document.getElementById('confirmation');
const root = ReactDOM.createRoot(container);

root.render(<ConfirmationPage />);