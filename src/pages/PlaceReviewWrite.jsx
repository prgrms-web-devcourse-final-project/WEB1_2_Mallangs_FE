import ModalFormInput from '../components/common/ModalFormInput';
import ReviewTotalScore from '../components/common/ReviewTotalScore';

const PlaceReviewWrtie = () => {
    const handleWriteReview = (inputObject) => {
        console.log(inputObject);
    };

    return (
        <div>
            <ReviewTotalScore />

            <div>
                <ModalFormInput
                    isIncludeRating="true"
                    placeHolder="이 장소에 대한 여러분의 경험을 작성해 주세요."
                    maxLength={500}
                    onSendContent={handleWriteReview}
                />
            </div>
        </div>
    );
};

export default PlaceReviewWrtie;
