import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Remix from '../components/common/Remix';
import loginMovie from '../assets/miscs/login-movie-0.mp4';
import loginBgImage from '../assets/images/login-background-image.png';
import axios from 'axios';

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

    useState(() => {
        const savedUserId = localStorage.getItem('rememberedUserId');
        if (savedUserId) {
            setFormData((prev) => ({ ...prev, userId: savedUserId }));
            setRememberMe(true);
        }
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
            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/member/login`,
                {
                    userId: formData.userId,
                    password: formData.password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        accept: '*/*',
                    },
                },
            );

            if (rememberMe) {
                localStorage.setItem('rememberedUserId', formData.userId);
            } else {
                localStorage.removeItem('rememberedUserId');
            }

            navigate('/');
        } catch (err) {
            setError(
                '로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.',
            );
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
                사용자의 브라우저가 내장 동영상 플레이어를 지원하지 않습니다.
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

                        <h1>
                            ♤£¢
                            <br />
                            말랑플레이스
                            <br />
                            (로고 만들거임)
                        </h1>
                    </div>

                    <form id="form-login" onSubmit={handleSubmit}>
                        {error && (
                            <div className="error-message text-red-500 mb-4">
                                {error}
                            </div>
                        )}

                        <input
                            type="text"
                            id="input-login-account"
                            placeholder="ID 입력..."
                            value={formData.userId}
                            onChange={handleInputChange}
                            disabled={isLoading}
                        />

                        <input
                            type="password"
                            id="input-login-password"
                            placeholder="비밀번호 입력..."
                            value={formData.password}
                            onChange={handleInputChange}
                            disabled={isLoading}
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

                        <button type="submit" disabled={isLoading}>
                            {isLoading ? '로그인 중...' : '로그인'}
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
                        회원가입
                    </button>

                    <button
                        type="button"
                        className="button-service-control"
                        title="ID / 비밀번호 찾기"
                        onClick={() => navigate('/find-account')}
                    >
                        ID / 비밀번호 찾기
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
