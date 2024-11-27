import BaseLayout from './src/components/layout/BaseLayout';
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
        ],
    },
];
