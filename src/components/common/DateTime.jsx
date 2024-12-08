import { useState } from 'react';

const DateTime = ({ value, onChange }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [inputValue, setInputValue] = useState(value || '');

    const handleDateTimeChange = (event) => {
        const currentValue = event.target.value;
        setInputValue(currentValue); // 입력값 상태 업데이트

        // 날짜 형식 (YYYY-MM-DD) 및 24시간제 시간 검사 정규식
        const dateTimeRegex =
            /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])\s(0[0-9]|1[0-9]|2[0-3])$/;

        if (!dateTimeRegex.test(currentValue)) {
            setErrorMessage(
                '날짜와 시간 형식이 올바르지 않습니다. 예: 2024-12-07 15',
            );
            return;
        }

        setErrorMessage('');
        onChange(currentValue);
    };

    return (
        <div className="datetime">
            <div className="datetime-wrapper">
                <input
                    id="datetime-input"
                    className="exclude"
                    type="text"
                    placeholder="예: 2024-12-07 15"
                    value={inputValue}
                    onChange={handleDateTimeChange}
                />
            </div>
            {errorMessage && <p id="datetime-error-message">{errorMessage}</p>}
        </div>
    );
};

export default DateTime;
