import { useState } from 'react';
import { useModalStore } from '../../stores/modalStatus';
import Remix from './Remix';

const SignatureImage = () => {
    const modalStatus = useModalStore((state) => state.modalStatus);
    const [selectorStatus, toggleSelector] = useState(false);
    const [currentMainCategory, setMainCategory] = useState(null);
    const mainCategoryList = [
        { label: '동물병원', value: 'hospital' },
        { label: '동물 약 취급 약국', value: 'pharmacy' },
        { label: '반려동물 미용실', value: 'salon' },
        { label: '동물 카페', value: 'cafe' },
        { label: '반려동물 친화 시설', value: 'facillity' },
        { label: '사용자 등록 장소', value: 'user' },
        { label: '기타', value: 'others' },
    ];

    const handleImageUpload = () => {
        console.log(1);
    };

    const handleCategorySelect = (categoryObject) => {
        setMainCategory();

        console.log(categoryObject.value);
    };

    return (
        <div className="cover-signature-image-container">
            <div id="main-modal-signature-image">
                <div className="signature-image-wrapper">
                    {modalStatus.threadUser.userImage &&
                    modalStatus.threadType === 'profile' ? (
                        <img
                            className="signature-image"
                            src={modalStatus.threadUser.userImage}
                            alt="시그니처 이미지"
                        />
                    ) : null}

                    {modalStatus.editMode &&
                    modalStatus.threadType === 'profile' ? (
                        <button
                            type="button"
                            className="signature-image-controls"
                            onClick={handleImageUpload}
                        >
                            <Remix iconName={'add-line'} iconSize={1.8} />

                            <p>이미지 변경</p>
                        </button>
                    ) : modalStatus.editMode &&
                      modalStatus.threadType === 'places' ? (
                        <button
                            type="button"
                            className="signature-image-controls"
                            onClick={() => toggleSelector(!selectorStatus)}
                        >
                            <Remix iconName={'add-line'} iconSize={1.8} />

                            <p>{currentMainCategory ?? '주 분류 선택'}</p>
                        </button>
                    ) : null}
                </div>

                <button
                    type="button"
                    className={`button-signature-information ${modalStatus.threadType === 'places' && 'information'}`}
                    title={
                        modalStatus.threadType === 'places'
                            ? '장소 정보'
                            : '설정'
                    }
                >
                    <Remix
                        iconName={
                            modalStatus.threadType === 'places'
                                ? 'information-2-fill'
                                : 'settings-3-fill'
                        }
                        iconSize={1.2}
                    />
                </button>
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
