const EmptyList = ({ placeHolderText = '아직은 표시할 내용이 없어요.' }) => {
    return (
        <div className="empty-list-placeholder">
            <svg
                className="empty-list-illust"
                viewBox="0 0 162 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="emptyPlaceHolder" opacity="0.5">
                    <path
                        id="Vector"
                        d="M2.11279 49.5137C2.11279 49.5137 3.69328 49.8921 6.46098 50.456"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        id="Vector_2"
                        d="M15.0312 52.058C42.7751 56.7847 105.252 63.1214 101.557 23.4238C101.557 23.4238 98.5966 0.0281817 72.8117 2.26164C47.0342 4.49509 50.5365 30.651 50.5365 30.651C50.5365 30.651 55.5154 62.7059 110.996 56.1465"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="8 8"
                    />
                    <path
                        id="Vector_3"
                        d="M115.336 55.5756C116.769 55.3604 118.238 55.1304 119.737 54.8633"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        id="Vector_4"
                        d="M125.094 42.479C125.094 42.479 128.381 31.6456 141.448 35.0663C154.515 38.4869 159.887 43.4139 159.887 43.4139C159.887 43.4139 150.026 55.5606 138.747 54.3957C138.747 54.3957 122.712 53.7353 125.087 42.4715L125.094 42.479Z"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        id="Vector_5"
                        d="M117.867 41.7891C117.867 41.7891 126.801 41.4552 135.801 43.8741"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </svg>

            <p className="empty-list-text">{placeHolderText}</p>
        </div>
    );
};

export default EmptyList;
