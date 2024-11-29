import Remix from './Remix';

const ReviewItem = ({ index }) => {
    return (
        <article className="review-item">
            <div className="review-item-checkbox-wrapper">
                <input type="checkbox" id={`chkReviewItem${index}`} />

                <label htmlFor={`chkReviewItem${index}`}>
                    <div className="toggles-indicator">
                        <Remix iconName={'check-line'} iconSize={0.6} />
                    </div>
                </label>
            </div>

            <dl className="review-item-descriptions">
                <dt className="review-item-author">
                    <div></div>
                    <div>사용자 네임태그</div>
                </dt>

                <dd className="review-item-content">
                    <div>컨텐츠</div>
                </dd>

                <hr />

                <dd className="review-item-summary">
                    <div>별점, 작성일</div>
                </dd>
            </dl>
        </article>
    );
};

export default ReviewItem;
