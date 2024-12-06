import ReviewTotalScore from '../components/common/ReviewTotalScore';
import ReviewItem from '../components/common/ReviewItem';

const PlaceReviewList = () => {
    return (
        <div>
            <ReviewTotalScore />

            <div className="user-common-item-list">
                <ReviewItem />
            </div>
        </div>
    );
};

export default PlaceReviewList;
