import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const mallangPlace = createRoot(document.getElementById('root'));

mallangPlace.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
