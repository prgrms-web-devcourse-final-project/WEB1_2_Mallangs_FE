import { useEffect, useState } from 'react';
import { useModalStore } from '../stores/modalStatus';
import Remix from './common/Remix';
import MainModalCover from './common/MainModalCover';

// ↓ 사용자 모달 컴포넌트

import MallangProfile from '../pages/MallangProfile';
import UserProfile from '../pages/UserProfile';
import UserThreads from '../pages/UserThreads';
import UserArticles from '../pages/UserArticles';
import UserReplies from '../pages/UserReplies';
import UserReviews from '../pages/UserReviews';
import UserChatList from '../pages/UserChatList';
import UserChatRoom from '../pages/UserChatRoom';

// ↓ 글타래 보기 컴포넌트

// ↓ 글타래 작성 컴포넌트

const MainModal = ({ routeName }) => {
    const [currentTabIndex, setTabIndex] = useState(0);
    const [currentSlaveIndex, setSlaveIndex] = useState(0);
    const modalStatus = useModalStore((state) => state.modalStatus);
    const modalData = modalStatus.modalData;

    // 자 이제 시작이야 컴포넌트를 향한 여행

    const currentRoute =
        modalData.masterNavigations[currentTabIndex].slaveNavigations[
            currentSlaveIndex
        ];

    const modalRouteMatcher = {
        'mallangs-info': <MallangProfile />,
        'user-info': <UserProfile />,
        'user-threads': <UserThreads />,
        'user-articles': <UserArticles />,
        'user-replies': <UserReplies />,
        'user-reviews': <UserReviews />,
        'user-chat-list': <UserChatList />,
        'user-chat-room': <UserChatRoom />,
    };

    useEffect(() => {
        console.log(currentRoute.value);
    }, [currentRoute]);

    return (
        <aside id="main-modal">
            <MainModalCover />

            <section id="main-modal-body">
                <div id="main-modal-sidebar">
                    <ul id="main-modal-side-menu">
                        {modalData.masterNavigations[
                            currentTabIndex
                        ].slaveNavigations.map((menuItem, index) => {
                            return (
                                <li
                                    className={`side-menu-item ${index === currentSlaveIndex && 'on'}`}
                                    key={index}
                                    onClick={() => setSlaveIndex(index)}
                                >
                                    <Remix
                                        iconName={
                                            index === currentSlaveIndex
                                                ? 'arrow-right-s-line'
                                                : 'subtract-line'
                                        }
                                    />

                                    <span>{menuItem.label}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div id="main-modal-content-container">
                    <nav id="main-modal-navigation">
                        <ul>
                            {modalData.masterNavigations.map(
                                (menuItem, index) => {
                                    return (
                                        <li
                                            className={`modal-tab-navigation-item ${index === currentTabIndex && 'on'}`}
                                            key={index}
                                            onClick={() => {
                                                setTabIndex(index);
                                                setSlaveIndex(0);
                                            }}
                                        >
                                            <span>{menuItem.label}</span>

                                            {menuItem.count !== null &&
                                                `(${menuItem.count})`}
                                        </li>
                                    );
                                },
                            )}
                        </ul>
                    </nav>

                    <div id="main-modal-content">
                        {modalRouteMatcher[currentRoute.value]}
                    </div>
                </div>
            </section>
        </aside>
    );
};

export default MainModal;
