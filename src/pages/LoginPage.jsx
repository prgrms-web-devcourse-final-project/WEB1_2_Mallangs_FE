import { useNavigate } from 'react-router-dom';
import Remix from '../components/common/Remix';

const LoginlPage = () => {
    const navigate = useNavigate();
    const thisYear = new Date().getFullYear();

    return (
        <section id="full-page-wrapper">
            <div className="service-container-wrapper">
                <div id="login-form-container" className="service-container">
                    <div className="service-logo-container">
                        <button onClick={() => navigate(-1)}>뒤로</button>

                        <p>대충 로고</p>
                    </div>

                    <form id="form-login">
                        <input
                            type="text"
                            id="input-login-account"
                            placeholder="ID 입력..."
                        />

                        <input
                            type="password"
                            id="input-login-password"
                            placeholder="비밀번호 입력..."
                        />

                        <input
                            type="checkbox"
                            name="check-something"
                            id="checkbox-login-constant"
                        />

                        <label htmlFor="checkbox-login-constant">
                            <div className="toggles-indicator">
                                <Remix iconName={'check-line'} iconSize={0.6} />
                            </div>

                            <span className="toggles-label">ID 기억하기</span>
                        </label>

                        <button>로그인</button>
                    </form>
                </div>

                <div>
                    <button>회원가입</button>

                    <button>ID / 비밀번호 찾기</button>
                </div>

                <div className="service-copyright">
                    Copyright © {thisYear} MallangPlace Inc. All Rights
                    Reserved.
                </div>
            </div>
        </section>
    );
};

export default LoginlPage;
