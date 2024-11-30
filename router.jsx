import BaseLayout from './src/components/layout/BaseLayout';
import MainPage from './src/pages/MainPage';
import ErrorPage from './src/pages/ErrorPage';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import ComponentMuseum from './src/pages/ComponentMuseum';

export const routesConfig = [
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '/community',
                element: <>Wow</>,
            },
            {
                path: '/missing',
                element: <>Oh No</>,
            },
            {
                path: '/museum',
                element: <ComponentMuseum />,
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/*',
        element: <ErrorPage />,
    },
];
