import React from 'react';

const Remix = ({ iconName, iconSize = 0.8 }) => {
    // iconName은 Remix Icon (https://remixicon.com/) 참조
    // iconSize는 rem(20px) 단위를 기준으로 하여 기본값은 .8rem(16px)이다.
    // 아이콘만 따로 색상을 주고 싶다면, 해당 컴포넌트의 .scss 파일 내에서 .remix를 nesting하여 color를 지정한다.

    const iconStyle = {
        '--icon-size': iconSize + 'rem',
    };

    return (
        <svg className="remix" style={iconStyle}>
            <use xlinkHref={`/miscs/remixicon.symbol.svg#ri-${iconName}`}></use>
        </svg>
    );
};

export default Remix;
