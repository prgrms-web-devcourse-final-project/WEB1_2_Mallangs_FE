import { useEffect, useState } from 'react';
import { useThreadModalStore } from '../stores/rescueThreadStatus';
import Remix from './common/Remix';
import ThreadModalCover from './common/ThreadModalCover';

// ↓ 사용자 모달 컴포넌트
import ThreadRescueForm from './common/ThreadRescueForm';

// ↓ 글타래 보기 컴포넌트

// ↓ 글타래 작성 컴포넌트

const ThreadModal = ({ routeName }) => {
    const modalStatus = useThreadModalStore((state) => state.modalStatus);
    const modalData = modalStatus.modalData;
    const [currentTabIndex, setTabIndex] = useState(0);
    const [currentSlaveIndex, setSlaveIndex] = useState(0);

    // 자 이제 시작이야 컴포넌트를 향한 여행

    const currentRoute =
        modalData.masterNavigations[currentTabIndex].slaveNavigations[
            currentSlaveIndex
        ];

    const modalRouteMatcher = {
        'thread-rescue': <ThreadRescueForm />,
    };

    useEffect(() => {
        console.log(currentRoute.value);
    }, [currentRoute]);

    return (
        <aside id="main-modal">
            <ThreadModalCover />

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

export default ThreadModal;
