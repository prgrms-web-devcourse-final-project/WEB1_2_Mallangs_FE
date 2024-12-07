import { useState } from 'react';

const DateTime = ({ value, onChange }) => {
    const [errorMessage, setErrorMessage] = useState('');

    const handleDateTimeChange = (event) => {
        const inputValue = event.target.value;
        onChange(inputValue);

        const dateTimeRegex =
            /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])\s(0[0-9]|1[0-9]|2[0-3])$/;

        if (!dateTimeRegex.test(inputValue)) {
            setErrorMessage(
                '날짜와 시간 형식이 올바르지 않습니다. 예: 2024-12-07 15',
            );
            return;
        }

        try {
            const [datePart, timePart] = inputValue.split(' ');
            const [year, month, day] = datePart.split('-').map(Number);
            const [hour] = timePart.split(':').map(Number);
            const convertDate = new Date(year, month - 1, day, hour);

            if (
                convertDate.getMonth() + 1 !== month ||
                convertDate.getDate() !== day
            ) {
                setErrorMessage('유효하지 않은 날짜입니다. 다시 입력해주세요!');
                return;
            }

            setErrorMessage('');
        } catch (error) {
            console.error('Error processing date:', error);
            setErrorMessage('날짜와 시간 처리 중 문제가 발생했습니다!');
        }
    };

    return (
        <div className="datetime">
            <div className="datetime-wrapper">
                <input
                    id="datetime-input"
                    className="exclude"
                    type="text"
                    placeholder="예: 2024-12-07 15"
                    value={value}
                    onChange={handleDateTimeChange}
                />
            </div>
            {errorMessage && <p id="datetime-error-message">{errorMessage}</p>}
        </div>
    );
};

export default DateTime;
