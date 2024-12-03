import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import MainPage from './pages/MainPage';
import ComponentMuseum from './pages/ComponentMuseum';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FindAccountPage from './pages/FindAccountPage';
import ErrorPage from './pages/ErrorPage';
import MainModal from './components/MainModal';
import MallangProfile from './pages/MallangProfile';
import UserProfile from './pages/UserProfile';
import CommunityPage from './pages/CommunityPage';

const mallangPlace = createRoot(document.getElementById('root'));

mallangPlace.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<MainPage />}></Route>

                    <Route path="community" element={<CommunityPage />}></Route>

                    <Route
                        path="missing"
                        element={<>이곳은 실종신고</>}
                    ></Route>

                    <Route path="museum" element={<ComponentMuseum />}></Route>
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
    </StrictMode>,
);
