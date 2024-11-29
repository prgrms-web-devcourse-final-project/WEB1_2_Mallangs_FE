import { useState } from 'react';

const MarkerCategory = () => {
    const [currentCategory, setCategoryIndex] = useState(0);

    const categoryList = [
        { label: '전체' },
        { label: '시설 / 업체' },
        { label: '실종신고' },
        { label: '구조요청' },
    ];

    return (
        <ul id="marker-category-container">
            {categoryList.map((item, index) => {
                return (
                    <li
                        className={`marker-category-item ${currentCategory === index && 'on'}`}
                        key={index}
                        onClick={() => setCategoryIndex(index)}
                    >
                        <span>{item.label}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default MarkerCategory;
