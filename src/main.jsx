import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BaseLayout from './components/layout/BaseLayout';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ErrorPage from './pages/ErrorPage';
import FindAccountPage from './pages/FindAccountPage';
import CommunityPage from './pages/CommunityPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticleDetailsPage from './pages/ArticleDetailsPage';
import MissingListPage from './pages/MissingListPage';
import MissingDetailsPage from './pages/MissingDetailsPage';
import MainModal from './components/MainModal';
import ComponentMuseum from './pages/ComponentMuseum';

const mallangPlace = createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

mallangPlace.render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BaseLayout />}>
                        <Route index element={<MainPage />}></Route>

                        <Route path="community">
                            <Route index element={<CommunityPage />}></Route>

                            <Route
                                path=":categoryName"
                                element={<ArticleListPage />}
                            ></Route>

                            <Route
                                path=":categoryName/:articleID"
                                element={<ArticleDetailsPage />}
                            ></Route>
                        </Route>

                        <Route path="missing">
                            <Route index element={<MissingListPage />}></Route>

                            <Route
                                path=":articleID"
                                element={<MissingDetailsPage />}
                            ></Route>
                        </Route>

                        <Route
                            path="museum"
                            element={<ComponentMuseum />}
                        ></Route>
                    </Route>

                    <Route path="/login" element={<LoginPage />}></Route>

                    <Route path="/register" element={<RegisterPage />}></Route>

                    <Route
                        path="/find-account"
                        element={<FindAccountPage />}
                    ></Route>

                    <Route path="/*" element={<ErrorPage />}></Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>,
);
