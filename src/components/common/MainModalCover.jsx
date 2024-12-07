import { useModalStore } from '../../stores/modalStatus';
import Remix from './Remix';
import DropdownSelector from './DropdownSelector';
import SignatureImage from './SignatureImage';
import tempOptionList from '../../datas/temp-options-list.json'; // 임시 드롭다운 옵션 데이터

const MainModalCover = () => {
    const modalStatus = useModalStore((state) => state.modalStatus);
    const modalData = useModalStore((state) => state.modalData);
    const toggleModal = useModalStore((state) => state.toggleModal);

    return (
        <section id="main-modal-cover" className={`${modalData.threadType}`}>
            {(modalData.threadType === 'profile' ||
                modalData.threadType === 'places') && (
                <img
                    src={
                        modalData.threadCoverImage ??
                        modalData.threadImages[0].imageURL
                    }
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                    alt="글타래 배경 이미지"
                />
            )}

            <div className="cover-controls">
                {modalStatus.isThisMine &&
                    modalData.threadType !== 'profile' && (
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

            {modalData.threadType === 'profile' && <SignatureImage />}
            {modalData.threadType === 'places' && <SignatureImage />}

            <div className="cover-descriptions-container">
                <dl className="cover-descriptions">
                    <dt className="thread-title-container">
                        <h5 className="thread-title">
                            {modalStatus.isAuthenticated && (
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

                        <p>{modalData.threadSubjects.mainSubject}</p>

                        {modalData.threadSubjects.subjectAlpha && (
                            <>
                                <span>·</span>

                                <p>{modalData.threadSubjects.subjectAlpha}</p>
                            </>
                        )}

                        {modalData.threadSubjects.subjectBeta && (
                            <>
                                <span>·</span>

                                <p>{modalData.threadSubjects.subjectBeta}</p>
                            </>
                        )}

                        {modalData.threadSubjects?.subjectGamma && (
                            <>
                                <span>·</span>

                                <p>{modalData.threadSubjects.subjectGamma}</p>
                            </>
                        )}
                    </dd>
                </dl>
            </div>
        </section>
    );
};

export default MainModalCover;
