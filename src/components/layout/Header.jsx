import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useNotificationStore } from '../../stores/notificationStatus';
import logoImage from '../../assets/images/logo.png';
import Remix from '../common/Remix';
import UserProfileImage from '../common/UserProfileImage';

const Header = ({ setPanel }) => {
    const [mobileNavStatus, setMobileNavStatus] = useState(false);
    const [isLoggedIn, setLoginStatus] = useState(true);

    const navigate = useNavigate();

    const notificationArray = useNotificationStore(
        (state) => state.notifications,
    );

    let timedSizing = null;

    window.addEventListener('resize', () => {
        // 화면 리사이즈시 모바일 네비게이션을 숨기기 위한 펑션
        clearTimeout(timedSizing);

        timedSizing = setTimeout(() => {
            if (window.innerWidth > 720) {
                setMobileNavStatus(false);
            }
        }, 250);
    });

    const unReadNotifications = () => {
        return Number(
            notificationArray.replies.filter((item) => !item.isRead).length +
                notificationArray.messages.filter(
                    (item) => item.unReadCount > 0,
                ).length,
        );
    };

    const handleMobileNav = () => {
        setMobileNavStatus(!mobileNavStatus);
    };

    return (
        <header id="head-primary">
            <Link to="/">
                <h1 id="logo-primary" title="말랑플레이스 로고">
                    <img src={logoImage} alt="말랑플레이스 로고" />

                    <p>
                        <span>말랑이들과 함께하는 우리 세상</span>

                        <span>말랑플레이스</span>
                    </p>
                </h1>
            </Link>

            <nav
                id="nav-primary"
                className={mobileNavStatus ? 'mobile-on' : undefined}
            >
                <button
                    type="button"
                    id="button-burger"
                    className={mobileNavStatus ? 'on' : undefined}
                    title="모바일 메뉴"
                    onClick={handleMobileNav}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul>
                    <li className="nav-item primary">
                        <NavLink to="/">
                            <span>말랑맵</span>
                        </NavLink>
                    </li>

                    {/*
                    <li className="nav-item primary">
                        <NavLink to="/community">
                            <span>커뮤니티</span>
                        </NavLink>
                    </li>
                    */}

                    {/*
                    <li className="nav-item primary">
                        <NavLink to="/missing">
                            <span>실종신고</span>
                        </NavLink>
                    </li>
                    */}

                    <li className="nav-item primary">
                        <NavLink to="/museum">
                            <span>컴포넌트 박물관</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div id="head-controls">
                <div
                    id="total-search-toggler"
                    onClick={() => setPanel('total-search')}
                >
                    <span>키워드 검색</span>

                    <Remix iconName={'search-2-line'} iconSize={0.8} />
                </div>

                {isLoggedIn ? (
                    <>
                        <button
                            type="button"
                            id="button-notify"
                            className={unReadNotifications() > 0 ? 'on' : null}
                            data-item-count={1}
                            title={`현재 ${unReadNotifications().toLocaleString('ko-KR') ?? 0}개의 확인하지 않은 알림이 있습니다.`}
                            onClick={() => setPanel('notifications')}
                        >
                            <Remix
                                iconName={'notification-2-fill'}
                                iconSize={0.8}
                            />
                        </button>

                        <button
                            type="button"
                            id="button-user-profile"
                            title="대표 말랑이 보기"
                            onClick={() => setPanel('user-profile')}
                        >
                            <UserProfileImage
                                imageSrc={
                                    'https://picsum.photos/seed/kim/128/128'
                                }
                                imageSize={1.8}
                            />
                        </button>
                    </>
                ) : (
                    <button
                        type="button"
                        id="button-user-login"
                        title="회원 로그인"
                        onClick={() => navigate('/login')}
                    >
                        <Remix iconName={'key-line'} />

                        <span>로그인</span>
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
