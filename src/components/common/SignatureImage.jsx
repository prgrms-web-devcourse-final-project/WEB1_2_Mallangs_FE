import { useState } from 'react';
import { useModalStore } from '../../stores/modalStatus';
import Remix from './Remix';
import tempDB from '../../datas/temp-db.json';

const SignatureImage = () => {
    const { modalStatus, modalData } = useModalStore((state) => state);

    const [selectorStatus, toggleSelector] = useState(false);
    const [currentMainCategory, setMainCategory] = useState({
        label: '주 분류 선택',
        value: null,
    });

    const mainCategoryList = [
        { label: '동물병원', value: 'hospital' },
        { label: '동물 약 취급 약국', value: 'pharmacy' },
        { label: '반려동물 미용실', value: 'salon' },
        { label: '동물 카페', value: 'cafe' },
        { label: '반려동물 친화 시설', value: 'facillity' },
        { label: '사용자 등록 장소', value: 'user' },
        { label: '기타', value: 'others' },
    ];

    const currentUser = tempDB.users.find(
        (user) => user.id === modalData.threadAuthor.userID,
    );

    const handleImageUpload = () => {
        console.log(1);
    };

    const handleCategorySelect = (categoryObject) => {
        setMainCategory(categoryObject);
        toggleSelector(false);

        console.log(categoryObject.value);
    };

    return (
        <div className="cover-signature-image-container">
            <div id="main-modal-signature-image">
                <div className="signature-image-wrapper">
                    {currentUser.userImage &&
                    modalData.threadType === 'profile' ? ( // 글타래 작성자가 존재하고 타입이 프로필일 때
                        <img
                            className="signature-image"
                            src={currentUser.userImage}
                            alt="시그니처 이미지"
                        />
                    ) : (
                        currentMainCategory.value !== null && (
                            <img
                                className="signature-image category"
                                src={`/images/${currentMainCategory.value}.png`}
                                alt={currentMainCategory.label}
                            />
                        )
                    )}

                    {modalStatus.isEditMode &&
                    modalData.threadType === 'profile' ? ( // 작성 / 수정 모드이며 타입이 프로필일 때
                        <button
                            type="button"
                            className="signature-image-controls"
                            onClick={handleImageUpload}
                        >
                            <Remix iconName={'add-line'} iconSize={1.8} />

                            <p>이미지 변경</p>
                        </button>
                    ) : modalStatus.isEditMode &&
                      modalData.threadType === 'writeMode' ? ( // 작성 / 수정 모드이며 타입이 글타래일 때
                        <button
                            type="button"
                            className="signature-image-controls"
                            onClick={() => toggleSelector(!selectorStatus)}
                        >
                            <Remix iconName={'add-line'} iconSize={1.8} />

                            <p>{currentMainCategory.label ?? '주 분류 선택'}</p>
                        </button>
                    ) : null}
                </div>

                {modalStatus.isThisMine && (
                    <button
                        type="button"
                        className={`button-signature-information ${modalData.threadType === 'places' && 'information'}`}
                        title={
                            modalData.threadType === 'places'
                                ? '장소 정보'
                                : '설정'
                        }
                    >
                        <Remix
                            iconName={
                                modalData.threadType === 'places'
                                    ? 'information-2-fill'
                                    : 'settings-3-fill'
                            }
                            iconSize={1.2}
                        />
                    </button>
                )}
            </div>

            {selectorStatus && (
                <ul className="signature-main-category-selector">
                    {mainCategoryList.map((item, index) => {
                        return (
                            <li
                                className="signature-category-selector-option"
                                key={index}
                                onClick={() => handleCategorySelect(item)}
                            >
                                {item.label}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default SignatureImage;
