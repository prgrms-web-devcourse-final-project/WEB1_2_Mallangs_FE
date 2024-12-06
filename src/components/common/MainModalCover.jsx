import { useModalStore } from '../../stores/modalStatus';
import Remix from './Remix';
import DropdownSelector from './DropdownSelector';
import SignatureImage from './SignatureImage';
import tempOptionList from '../../datas/temp-options-list.json'; // 임시 드롭다운 옵션 데이터

const MainModalCover = () => {
    const modalStatus = useModalStore((state) => state.modalStatus);
    const toggleModal = useModalStore((state) => state.toggleModal);
    const modalData = modalStatus.modalData;

    return (
        <section id="main-modal-cover" className={`${modalStatus.threadType}`}>
            <div className="cover-controls">
                {modalStatus.isThisMine &&
                    modalStatus.threadType !== 'profile' && (
                        <div className="cover-controls-author">
                            <DropdownSelector
                                optionList={tempOptionList}
                                onSelect={(data) =>
                                    console.log('드롭다운에서 선택한 값:', data)
                                }
                            />

                            <button type="button" className="buttons">
                                <Remix
                                    iconName={'edit-box-line'}
                                    iconSize={0.6}
                                />

                                <span>글타래 수정</span>
                            </button>

                            <button type="button" className="buttons">
                                <Remix
                                    iconName={'delete-bin-fill'}
                                    iconSize={0.6}
                                />

                                <span>삭제</span>
                            </button>
                        </div>
                    )}

                <button
                    type="button"
                    id="button-close-modal"
                    title="창 닫기"
                    onClick={() => {
                        document.body.classList.remove('prevent-scroll');
                        toggleModal(false);
                    }}
                >
                    <Remix iconName={'close-line'} />
                </button>
            </div>

            {modalStatus.threadType === 'profile' && <SignatureImage />}
            {modalStatus.threadType === 'places' && <SignatureImage />}

            <div className="cover-descriptions-container">
                <dl className="cover-descriptions">
                    <dt className="thread-title-container">
                        <h5 className="thread-title">
                            {modalStatus.threadUser.isAuthenticated && (
                                <Remix
                                    iconName={'shield-check-fill'}
                                    iconSize={1}
                                />
                            )}

                            <span className="thread-title-content">
                                {modalData.threadTitle}
                            </span>
                        </h5>
                    </dt>

                    <dd className="thread-category-container">
                        <Remix iconName={'search-eye-line'} iconSize={0.6} />

                        <p>{modalData.mainCategory}</p>

                        {modalData.subCategory1 && (
                            <>
                                <span>·</span>

                                <p>{modalData.subCategory1}</p>
                            </>
                        )}

                        {modalData.subCategory2 && (
                            <>
                                <span>·</span>

                                <p>{modalData.subCategory2}</p>
                            </>
                        )}

                        {modalData.subCategory3 && (
                            <>
                                <span>·</span>

                                <p>{modalData.subCategory3}</p>
                            </>
                        )}
                    </dd>
                </dl>
            </div>
        </section>
    );
};

export default MainModalCover;
