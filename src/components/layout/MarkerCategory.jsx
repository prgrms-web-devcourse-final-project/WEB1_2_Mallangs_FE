import { useState } from 'react';
import Remix from '../common/Remix';

const MarkerCategory = ({ isAreaInfoShowing, onNav }) => {
    const [currentCategory, setCategoryIndex] = useState(0);
    const [currentSubCategory, setSubCategoryIndex] = useState(0);
    const [isSubOn, setSubStatus] = useState(false);

    const categoryList = [
        { label: '전체', value: 'all' },
        {
            label: '시설 / 업체',
            value: 'places',
            children: [
                { label: '동물병원', value: 'hospital' },
                { label: '동물 약 취급 약국', value: 'pharmacy' },
                { label: '반려동물 미용', value: 'salon' },
                { label: '동물 카페', value: 'cafe' },
                { label: '반려동물 친화 시설', value: 'facillity' },
                { label: '사용자 등록 장소', value: 'user-custom' },
                { label: '기타', value: 'others' },
            ],
        },
        { label: '실종신고', value: 'missing' },
        { label: '구조요청', value: 'rescue' },
    ];

    return (
        <ul
            id="marker-category-container"
            className={isAreaInfoShowing ? 'decent' : undefined}
        >
            {categoryList.map((item, index) => {
                return (
                    <li
                        className={`marker-category-item ${currentCategory === index && 'on'}`}
                        key={item.value}
                    >
                        <span
                            onClick={() => {
                                onNav(item.value);
                                setCategoryIndex(index);
                                setSubStatus(!isSubOn);
                            }}
                        >
                            {item.label}

                            {item.children && (
                                <Remix iconName={'arrow-down-s-fill'} />
                            )}
                        </span>

                        {item.children && isSubOn && (
                            <ul className="marker-sub-category">
                                {item.children.map((subItem, subIndex) => {
                                    return (
                                        <li
                                            className={`marker-sub-category-item ${subIndex === currentSubCategory && 'on'}`}
                                            key={subItem.value}
                                            onClick={() => {
                                                onNav(subItem.value);
                                                setSubCategoryIndex(subIndex);
                                            }}
                                        >
                                            <span>{subItem.label}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default MarkerCategory;
