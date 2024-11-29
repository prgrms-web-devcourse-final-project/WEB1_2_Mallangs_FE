import { useRef, useState } from 'react';
import MainModalCover from './common/MainModalCover';
import Remix from './common/Remix';
import ReviewItem from './common/ReviewItem';
import MallangItem from './common/MallangItem';
import ArticleItem from './common/ArticleItem';
import ModalInstruction from './common/ModalInstruction';
import ReviewTotalScore from './common/ReviewTotalScore';
import ModalSectionTitle from './common/ModalSectionTitle';
import ModalDateSeparator from './common/ModalDateSeparator';
import ModalFormInput from './common/ModalFormInput';

const MainModal = ({ children }) => {
    const [modalStatus, setModalStatus] = useState({ isOpened: true });
    const modalBackdrop = useRef(null);

    if (modalStatus.isOpened)
        return (
            <div
                id="main-modal-backdrop"
                ref={modalBackdrop}
                onClick={(e) => {
                    if (e.target === modalBackdrop.current)
                        setModalStatus(false);
                }}
            >
                <div id="main-modal">
                    <MainModalCover />

                    <section id="main-modal-body">
                        <div id="main-modal-sidebar">
                            <ul id="main-modal-side-menu">
                                <li className="side-menu-item">
                                    <Remix iconName={'subtract-line'} />

                                    <span>오늘 아침 메뉴</span>
                                </li>

                                <li className="side-menu-item">
                                    <Remix iconName={'subtract-line'} />

                                    <span>오늘 점심 메뉴</span>
                                </li>

                                <li className="side-menu-item on">
                                    <Remix iconName={'arrow-right-s-line'} />

                                    <span>오늘 저녁 메뉴</span>
                                </li>
                            </ul>
                        </div>

                        <div id="main-modal-content-container">
                            <nav id="main-modal-navigation">
                                <ul>
                                    <li className="modal-tab-navigation-item">
                                        <span>메뉴명</span>
                                    </li>

                                    <li className="modal-tab-navigation-item on">
                                        <span>메뉴명</span>

                                        <span>(2)</span>
                                    </li>
                                </ul>
                            </nav>

                            <div id="main-modal-content">
                                {children}

                                <ModalFormInput />

                                <ModalDateSeparator />

                                <ModalSectionTitle />

                                <ReviewTotalScore />

                                <div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexFlow: 'column nowrap',
                                            gap: '.8rem',
                                            padding: '.8rem',
                                        }}
                                    >
                                        <ModalInstruction />
                                        <ArticleItem />
                                        <MallangItem mallangObject={{}} />
                                        <ReviewItem index={1} />
                                        <ReviewItem index={2} />
                                        <ReviewItem index={3} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
};

export default MainModal;
