import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Remix from '../components/common/Remix';

import { loginApi } from '../api/userApi';

import loginMovie from '../assets/miscs/login-movie-0.mp4';
import loginBgImage from '../assets/images/login-background-image.png';
import logoImage from '../assets/images/logo.png';

const LoginPage = () => {
    const navigate = useNavigate();
    const thisYear = new Date().getFullYear();
    const [formData, setFormData] = useState({
        userId: '',
        password: '',
    });
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const savedUserId = localStorage.getItem('rememberedUserId');
        if (savedUserId) {
            setFormData((prev) => ({ ...prev, userId: savedUserId }));
            setRememberMe(true);
        }
        return () => {
            setFormData({ userId: '', password: '' });
            setError('');
        };
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id === 'input-login-account' ? 'userId' : 'password']: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await loginApi({
                userId: formData.userId,
                password: formData.password,
            });

            if (rememberMe) {
                localStorage.setItem('rememberedUserId', formData.userId);
            } else {
                localStorage.removeItem('rememberedUserId');
            }

            navigate('/');
        } catch (error) {
            setError('ID 또는 비밀번호가 올바르지 않아요.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="full-page-wrapper">
            <video
                id="login-movie-background"
                poster={loginBgImage}
                muted={true}
                autoPlay={true}
                loop={true}
                playsInline
            >
                <source src={loginMovie} type="video/mp4" />

                <span>
                    사용자의 브라우저가 내장 동영상 플레이어를 지원하지
                    않습니다.
                </span>
            </video>

            <div className="service-container-wrapper">
                <div id="login-form-container" className="service-container">
                    <div className="service-logo-container">
                        <button
                            type="button"
                            id="button-service-go-back"
                            title="돌아가기"
                            onClick={() => navigate(-1)}
                        >
                            <Remix
                                iconName={'corner-up-left-line'}
                                iconSize={1}
                            />
                        </button>

                        <div id="login-service-name">
                            <p>말랑이와 함께하는 말랑한 세상</p>

                            <h1>말랑플레이스</h1>
                        </div>

                        <img id="login-logo-image" src={logoImage} />
                    </div>

                    <form id="form-login" onSubmit={handleSubmit}>
                        {error && (
                            <div className="login-error-message">{error}</div>
                        )}

                        <input
                            type="text"
                            id="input-login-account"
                            placeholder="ID 입력..."
                            value={formData.userId}
                            onChange={handleInputChange}
                            disabled={isLoading}
                            autoComplete="username"
                        />

                        <input
                            type="password"
                            id="input-login-password"
                            placeholder="비밀번호 입력..."
                            value={formData.password}
                            onChange={handleInputChange}
                            disabled={isLoading}
                            autoComplete="current-password"
                        />

                        <input
                            type="checkbox"
                            name="check-something"
                            id="checkbox-login-constant"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            disabled={isLoading}
                        />

                        <label htmlFor="checkbox-login-constant">
                            <div className="toggles-indicator">
                                <Remix iconName={'check-line'} iconSize={0.6} />
                            </div>

                            <span className="toggles-label">ID 기억하기</span>
                        </label>

                        <button
                            type="submit"
                            id="button-login"
                            title={'로그인'}
                            disabled={isLoading}
                        >
                            <Remix iconName={'key-fill'} />

                            <span>{isLoading ? '로그인 중...' : '로그인'}</span>
                        </button>
                    </form>
                </div>

                <div className="service-controls login-state-controls">
                    <button
                        type="button"
                        className="button-service-control"
                        title="회원가입"
                        onClick={() => navigate('/register')}
                    >
                        <span>회원가입</span>
                    </button>

                    <button
                        type="button"
                        className="button-service-control"
                        title="ID / 비밀번호 찾기"
                        onClick={() => navigate('/find-account')}
                    >
                        <span>ID / 비밀번호 찾기</span>
                    </button>
                </div>

                <div className="service-copyright">
                    Copyright © {thisYear} MallangPlace Inc. All Rights
                    Reserved.
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
