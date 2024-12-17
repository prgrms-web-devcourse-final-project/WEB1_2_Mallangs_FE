import { useEffect, useState } from 'react';
import { overlay } from 'overlay-kit';

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
import UserIgnoreList from '../pages/UserIgnoreList';

// ↓ 글타래 보기 컴포넌트 / 공통

import ReplyList from '../pages/ReplyList';

// ↓ 글타래 보기 컴포넌트 / 장소 정보

import PlaceInfo from '../pages/PlaceInfo';
import PlaceMisinfoReport from '../pages/PlaceMisinfoReport';
import PlaceReviewList from '../pages/PlaceReviewList';
import PlaceReviewWrtie from '../pages/PlaceReviewWrite';

// ↓ 글타래 보기 컴포넌트 / 실종신고

import MissingInfo from '../pages/MissingInfo';
import MissingSightingReport from '../pages/MissingSightingReport';

// ↓ 글타래 보기 컴포넌트 / 구조요청

import RescueDisclaimer from '../pages/RescueDisclaimer';
import RescueDetails from '../pages/RescueDetails';

// ↓ 글타래 작성 컴포넌트

import ThreadPlace from '../pages/ThreadPlace';
import ThreadMissingReport from '../pages/ThreadMissingReport';
import ThreadRescue from '../pages/ThreadRescue';

const TestModal = ({ open, onClose }) => {
    const [currentTabIndex, setTabIndex] = useState(0);
    const currentSlaveIndex = useModalStore((state) => state.slaveIndex);
    const setSlaveIndex = useModalStore((state) => state.setSlaveIndex);

    const modalStatus = useModalStore((state) => state.modalStatus);
    const modalData = useModalStore((state) => state.modalData);

    useEffect(() => {
        document.body.classList.add('prevent-scroll');

        return () => {
            setSlaveIndex(0);
        };
    }, []);

    /**
     * 위의 useModalStore / threadType에서 현재 모달의 상태값을 가지고 온다.
     * 모달의 navigation은 아래에 정리되어 있으며, 각각 다음과 같은 이름을 가진다.
     * 'profile': 사용자 프로필 보기 (나, 타인)
     * 'place': 시설 / 업체 글타래 보기
     * 'lost': 실종신고 글타래 보기
     * 'rescue': 구조요청 글타래 보기
     * 'writeMode': 글타래 작성 모드
     *
        const setModalType = useModalStore((state) => state.setModalType);
        const setModalData = useModalStore((state) => state.setModalData);

        onClick={() =>
            {
                overlay.open(
                    ({ isOpen, close }) => {
                        return <TestModal open={isOpen} onClose={close} />;
                    },
                    { overlayId: 'mainModal' },
                );

                setModalType('profile');
                setModalData({ ... });
            }
        }
     *
     * 컴포넌트 박물관 페이지에서 데모를 볼 수 있다.
     */

    const currentRoute =
        modalStatus.masterNavigations[currentTabIndex].slaveNavigations[
            currentSlaveIndex
        ];

    const modalRouteMatcher = {
        // 사용자 프로필 라우트 매치
        'mallangs-info': <MallangProfile />,
        'user-info': <UserProfile />,
        'user-threads': <UserThreads />,
        'user-articles': <UserArticles />,
        'user-replies': <UserReplies />,
        'user-reviews': <UserReviews />,
        'user-chat-list': <UserChatList />,
        'user-chat-room': <UserChatRoom />,
        'user-ignores': <UserIgnoreList />,

        // 장소 글타래 라우트 매치
        'place-info': <PlaceInfo />,
        'place-error-report': <PlaceMisinfoReport />,
        'place-review-list': <PlaceReviewList />,
        'place-review-write': <PlaceReviewWrtie />,
        'place-reply-list': <ReplyList />,

        // 실종신고 글타래 라우트 매치
        'missing-info': <MissingInfo />,
        // 'missing-info': <Test />,
        'missing-reply-list': <ReplyList />,
        'missing-sighting-report': <MissingSightingReport />,

        // 구조요청 글타래 라우트 매치
        'rescue-info': <RescueDetails />,
        'rescue-disclaimer': <RescueDisclaimer />,
        'rescue-reply-list': <ReplyList />,

        // 글타래 작성 라우트 매치
        'write-places': <ThreadPlace />,
        'write-missing': <ThreadMissingReport />,
        'write-rescue': <ThreadRescue />,
    };

    const closeModal = () => {
        onClose();

        overlay.unmount('mainModal');
    };

    if (open === true)
        return (
            <div id="main-modal-backdrop">
                <aside id="main-modal">
                    <MainModalCover onClose={onClose} />

                    <section id="main-modal-body">
                        <div id="main-modal-sidebar">
                            <ul id="main-modal-side-menu">
                                {modalStatus.masterNavigations[
                                    currentTabIndex
                                ].slaveNavigations.map((menuItem, index) => {
                                    return (
                                        <li
                                            className={`side-menu-item ${index === currentSlaveIndex && 'on'}`}
                                            key={index}
                                            onClick={() => {
                                                if (index !== currentSlaveIndex)
                                                    setSlaveIndex(index);
                                            }}
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
                                    {modalStatus.masterNavigations.map(
                                        (menuItem, index) => {
                                            return (
                                                <li
                                                    className={`modal-tab-navigation-item ${index === currentTabIndex && 'on'}`}
                                                    key={index}
                                                    onClick={() => {
                                                        if (
                                                            index !==
                                                            currentTabIndex
                                                        ) {
                                                            setTabIndex(index);
                                                            setSlaveIndex(0);
                                                        }
                                                    }}
                                                >
                                                    <span>
                                                        {menuItem.label}
                                                    </span>

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
            </div>
        );
};

export default TestModal;
