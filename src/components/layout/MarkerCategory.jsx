import { useState } from 'react';

const MarkerCategory = ({ onNav }) => {
    const [currentCategory, setCategoryIndex] = useState(0);
    const categoryList = [
        { label: '전체', value: 'all' },
        { label: '시설 / 업체', value: 'places' },
        { label: '실종신고', value: 'missing' },
        { label: '구조요청', value: 'rescue' },
    ];

    return (
        <ul id="marker-category-container">
            {categoryList.map((item, index) => {
                return (
                    <li
                        className={`marker-category-item ${currentCategory === index && 'on'}`}
                        key={index}
                        onClick={() => {
                            setCategoryIndex(index);
                            onNav(item.value);
                        }}
                    >
                        <span>{item.label}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default MarkerCategory;
