import { useState } from 'react';
import Emptystar from '../../assets/images/element-empty-star.svg?react';
import Fullstar from '../../assets/images/element-full-star.svg?react';

const StarRating = () => {
    const [selectedStar, setSelectedStar] = useState(0);

    const handleStarClick = (index) => {
        setSelectedStar(index);
    };
    return (
        <div className="star-container">
            <div className="star-container-rating">
                {Array(5)
                    .fill(null)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="star-container-rating-element"
                            onClick={() => handleStarClick(index)}
                        >
                            {index <= selectedStar ? (
                                <Fullstar />
                            ) : (
                                <Emptystar />
                            )}
                        </div>
                    ))}
            </div>

            <p className="star-container-score">{selectedStar + 1}점</p>
        </div>
    );
};

export default StarRating;
