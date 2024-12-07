import { useRef, useState } from 'react';
import Remix from './Remix';
import StarRating from './StarRating';

const ModalFormInput = ({
    isIncludeImage = true,
    isIncludeRating = false,
    isHorizontal = false,
    placeHolder = '내용을 입력하세요.',
    maxLength = 200,
    onSendContent,
}) => {
    const inputElement = useRef();
    const imageElement = useRef();
    const [formText, setText] = useState('');
    const [uploadImage, setImage] = useState(null);
    const [starPoint, setStarPoint] = useState(0);

    const handleInputDone = (e) => {
        e.preventDefault();

        if (formText.length < 10) {
            console.log('메시지가 짧을 때 보여주는 텍스트');

            return;
        }

        if (isIncludeRating && starPoint === 0) {
            console.log('별점을 선택하지 않았을 때 보여주는 텍스트');

            return;
        }

        onSendContent({ formText, uploadImage, starPoint });

        inputElement.current.value = '';
        if (isIncludeImage) imageElement.current.value = '';

        setText('');
        if (isIncludeImage) setImage(null);
        if (isIncludeRating) setStarPoint(0);
    };

    return (
        <form
            id="modal-form-input-container"
            className={isHorizontal ? 'horizontal' : undefined}
        >
            {isIncludeRating && (
                <div className="modal-form-star-rating">
                    <p>이 장소에서의 경험은 어땠나요?</p>

                    <StarRating
                        starSize={1.2}
                        onSendPoint={(data) => setStarPoint(data)}
                    />
                </div>
            )}

            {isIncludeImage && (
                <div className="modal-form-file-uploader">
                    <input
                        type="file"
                        id="modal-form-file"
                        accept="image/jpg, image/png, image/gif"
                        ref={imageElement}
                        onChange={(e) => setImage(e.target.value)}
                    />

                    <label htmlFor="modal-form-file">
                        <div className="modal-form-upload-button">
                            <Remix iconName={'share-2-line'} />

                            <span>이미지 업로드</span>
                        </div>

                        <span>
                            {uploadImage ? uploadImage : '선택된 파일 없음'}
                        </span>
                    </label>
                </div>
            )}

            <textarea
                id="modal-form-textarea"
                minLength={10}
                maxLength={maxLength}
                placeholder={`${placeHolder} (최대 ${maxLength} 자)`}
                ref={inputElement}
                onInput={(e) => setText(e.target.value)}
            ></textarea>

            <div className="modal-form-controls">
                {isHorizontal ? null : (
                    <p
                        className={
                            formText.length >= maxLength ? 'overflow' : ''
                        }
                    >
                        <span>{formText.length}</span>
                        <span> / </span>
                        <span>{maxLength} 자</span>
                    </p>
                )}

                <button
                    type="submit"
                    id="button-modal-form-submit"
                    className="buttons"
                    title="입력 내용 전송"
                    onClick={(e) => {
                        handleInputDone(e);
                    }}
                >
                    <span>전송</span>
                </button>
            </div>
        </form>
    );
};

export default ModalFormInput;
