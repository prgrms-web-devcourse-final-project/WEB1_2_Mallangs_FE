// import Emptystar from '../../assets/images/element-empty-star.svg?react';
import Fullstar from '../../assets/images/element-full-star.svg?react';

const StarRating = () => {
    const stars = Array(5).fill(null);
    return (
        <div className="star-container">
            <div className="star-full">
                {stars.map((_, index) => (
                    <Fullstar key={index} className="star-rating-element" />
                ))}
            </div>
        </div>
    );
};

export default StarRating;
