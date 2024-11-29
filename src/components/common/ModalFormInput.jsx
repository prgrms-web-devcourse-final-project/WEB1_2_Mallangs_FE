import { useState } from 'react';

const ModalFormInput = ({
    isIncludeImage = true,
    placeHolder = '내용을 입력하세요.',
    maxLength = 200,
}) => {
    const [formText, setText] = useState('');
    const [uploadImage, setImage] = useState(null);

    const handleInputText = (e) => {
        setText(e.target.value);
    };

    const handleInputFile = (e) => {
        setImage(e.target.value);
    };

    const handleFormData = (e) => {
        e.preventDefault();

        console.log({ formText, uploadImage });
    };

    return (
        <form id="modal-form-input-container">
            {isIncludeImage && (
                <div className="modal-form-file-uploader">
                    <input
                        type="file"
                        id="modal-form-file"
                        accept="image/jpg, image/png, image/gif"
                        onChange={handleInputFile}
                    />

                    <label htmlFor="modal-form-file">
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
                onInput={handleInputText}
            ></textarea>

            <div className="modal-form-controls">
                <p className={formText.length >= maxLength ? 'overflow' : ''}>
                    <span>{formText.length}</span>
                    <span> / </span>
                    <span>{maxLength} 자</span>
                </p>

                <button
                    type="submit"
                    id="button-modal-form-submit"
                    className="buttons"
                    title="입력 내용 전송"
                    onClick={handleFormData}
                >
                    <span>전송</span>
                </button>
            </div>
        </form>
    );
};

export default ModalFormInput;
