import BaseLayout from './src/components/layout/BaseLayout';
import ComponentMuseum from './src/pages/ComponentMuseum';
import MainPage from './src/pages/MainPage';

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
];
