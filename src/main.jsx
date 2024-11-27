import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routesConfig } from '../router';

const mallangPlace = createRoot(document.getElementById('root'));
const routerObject = createBrowserRouter(routesConfig);

mallangPlace.render(
    <StrictMode>
        <RouterProvider router={routerObject} />
    </StrictMode>,
);
