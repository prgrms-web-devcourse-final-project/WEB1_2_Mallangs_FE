import { useState } from 'react';

const StarRating = ({
    starSize = 0.8,
    currentPoint = 0,
    isClickable = true,
    onSendPoint,
}) => {
    const [selectedStar, setSelectedStar] = useState(currentPoint);

    const handleStarClick = (point) => {
        isClickable && setSelectedStar(point);

        onSendPoint(point);
    };

    return (
        <div
            className={`star-point-wrapper ${isClickable ? '' : 'unclickable'}`}
        >
            <div className="star-point-container">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                        <div
                            className={`star-point-item ${item <= selectedStar ? 'on' : ''}`}
                            style={{ '--star-size': starSize + 'rem' }}
                            key={index}
                            onClick={() => {
                                handleStarClick(item);
                            }}
                        >
                            <svg
                                width="32"
                                height="31"
                                viewBox="0 0 32 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.3503 1.40717C15.1447 0.24803 16.8553 0.248029 17.6497 1.40717L21.946 7.67597C22.2061 8.05543 22.589 8.33364 23.0303 8.46371L30.3199 10.6126C31.6678 11.0099 32.1964 12.6368 31.3395 13.7506L26.7051 19.7737C26.4246 20.1383 26.2783 20.5885 26.291 21.0483L26.4999 28.6452C26.5385 30.0499 25.1546 31.0554 23.8306 30.5846L16.6701 28.0383C16.2367 27.8842 15.7633 27.8842 15.3299 28.0383L8.16944 30.5846C6.84542 31.0554 5.46146 30.0499 5.5001 28.6452L5.70904 21.0483C5.72168 20.5885 5.57542 20.1383 5.29489 19.7737L0.660544 13.7506C-0.196381 12.6368 0.33224 11.0099 1.68014 10.6126L8.96974 8.46371C9.41099 8.33364 9.79391 8.05543 10.054 7.67597L14.3503 1.40717Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    );
                })}
            </div>

            <p className="star-point-score">{selectedStar}점</p>
        </div>
    );
};

export default StarRating;
