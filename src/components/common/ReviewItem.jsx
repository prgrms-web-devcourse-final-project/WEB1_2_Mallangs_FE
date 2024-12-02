import Remix from './Remix';
import NameTag from './NameTag';
import StarRating from './StarRating';
import dateFormat from '../../utils/dateFormat';

const ReviewItem = ({
    index = 0,
    userObject = { userID: 0, userImage: null, userName: '홍길동' },
    reviewImage = null,
    reviewContent = '내용 없음',
    starPoint = 0,
    writtenDate = '1970-01-01',
    isEditMode = false,
}) => {
    return (
        <article className="review-item">
            {isEditMode && (
                <div className="review-item-checkbox-wrapper">
                    <input type="checkbox" id={`chkReviewItem${index}`} />

                    <label htmlFor={`chkReviewItem${index}`}>
                        <div className="toggles-indicator">
                            <Remix iconName={'check-line'} iconSize={0.6} />
                        </div>
                    </label>
                </div>
            )}

            <dl className="review-item-descriptions">
                <dt className="review-item-author">
                    <NameTag userObject={userObject} />
                </dt>

                <dd className="review-item-content">
                    {reviewImage && (
                        <div className="review-item-image-container">
                            <img
                                className="review-item-image"
                                src={reviewImage}
                                alt="리뷰 이미지"
                            />
                        </div>
                    )}

                    <div className="review-item-text">{reviewContent}</div>
                </dd>

                <hr />

                <dd className="review-item-summary">
                    <StarRating currentPoint={starPoint} isClickable={false} />

                    <p className="datetime-row">{dateFormat(writtenDate)}</p>
                </dd>
            </dl>
        </article>
    );
};

export default ReviewItem;
