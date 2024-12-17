import { useModalStore } from '../../stores/modalStatus';
import { useThreadsTitleStore } from '../../stores/titleStatus';
import Remix from './Remix';
import DropdownSelector from './DropdownSelector';
import SignatureImage from './SignatureImage';
import tempOptionList from '../../datas/temp-options-list.json'; // 임시 드롭다운 옵션 데이터

const MainModalCover = ({
    isPlaceEdit = null,
    onTitleChange = () => {},
    onClose,
}) => {
    const { threadsTitle, setThreadsTitle } = useThreadsTitleStore();

    const handleTitleChange = (event) => {
        const newTitle = event.target.value;
        setThreadsTitle(newTitle);
        onTitleChange(newTitle);
    };

    const { modalStatus, modalData, toggleModal, setEditMode, setSlaveIndex } =
        useModalStore((state) => state);

    return (
        <section id="main-modal-cover" className={`${modalData.threadType}`}>
            {(modalData.threadType === 'profile' ||
                modalData.threadType === 'place') && (
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
                        userSelect: 'none',
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

                        onClose();
                    }}
                >
                    <Remix iconName={'close-line'} />
                </button>
            </div>

            {modalData.threadType === 'profile' && <SignatureImage />}
            {modalData.threadType === 'place' && <SignatureImage />}
            {modalData.threadType === 'writeMode' && isPlaceEdit && (
                <SignatureImage />
            )}

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

                            {modalStatus.isEditMode ? (
                                <input
                                    type="text"
                                    id="input-thread-title"
                                    placeholder="글타래 제목 입력..."
                                    value={threadsTitle}
                                    onChange={handleTitleChange}
                                />
                            ) : (
                                <span className="thread-title-content">
                                    {threadsTitle}
                                </span>
                            )}
                        </h5>
                    </dt>

                    <dd className="thread-category-container">
                        <Remix iconName={'search-eye-line'} iconSize={0.6} />

                        <p>{modalData.threadSubjects.mainSubject}</p>

                        {modalData.threadSubjects.subjectAlpha &&
                        !modalStatus.isEditMode ? (
                            <>
                                <span>·</span>

                                <p>{modalData.threadSubjects.subjectAlpha}</p>
                            </>
                        ) : (
                            modalStatus.isEditMode && (
                                <>
                                    <span>·</span>

                                    <input
                                        type="text"
                                        id="input-subject-alpha"
                                        className="input-thread-subject-edit"
                                        placeholder="보조 분류 1 입력..."
                                    />
                                </>
                            )
                        )}

                        {modalData.threadSubjects.subjectBeta &&
                        !modalStatus.isEditMode ? (
                            <>
                                <span>·</span>

                                <p>{modalData.threadSubjects.subjectBeta}</p>
                            </>
                        ) : (
                            modalStatus.isEditMode && (
                                <>
                                    <span>·</span>

                                    <input
                                        type="text"
                                        id="input-subject-beta"
                                        className="input-thread-subject-edit"
                                        placeholder="보조 분류 2 입력..."
                                    />
                                </>
                            )
                        )}

                        {modalData.threadSubjects.subjectGamma &&
                        !modalStatus.isEditMode ? (
                            <>
                                <span>·</span>

                                <p>{modalData.threadSubjects.subjectGamma}</p>
                            </>
                        ) : (
                            modalStatus.isEditMode && (
                                <>
                                    <span>·</span>

                                    <input
                                        type="text"
                                        id="input-subject-gamma"
                                        className="input-thread-subject-edit"
                                        placeholder="보조 분류 3 입력..."
                                    />
                                </>
                            )
                        )}
                    </dd>
                </dl>
            </div>
        </section>
    );
};

export default MainModalCover;
