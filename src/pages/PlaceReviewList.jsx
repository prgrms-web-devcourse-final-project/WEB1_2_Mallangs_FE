import EmptyList from '../components/common/EmptyList';
import ReviewTotalScore from '../components/common/ReviewTotalScore';
import ReviewItem from '../components/common/ReviewItem';

const PlaceReviewList = () => {
    let reviewList = [1, 2, 3, 4, 5, 6, 7]; // 아이템을 보여주기 위한 임시 배열

    return (
        <div>
            <ReviewTotalScore />

            <div id="review-list" className="user-common-item-list">
                {reviewList.length > 0 ? (
                    reviewList.map((item, index) => {
                        return <ReviewItem key={index} />;
                    })
                ) : (
                    <EmptyList placeHolderText="아직 리뷰가 없어요. 첫 리뷰를 작성해 보는 건 어떨까요?" />
                )}
            </div>
        </div>
    );
};

export default PlaceReviewList;
