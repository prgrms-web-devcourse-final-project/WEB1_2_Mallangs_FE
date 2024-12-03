import { useState } from 'react';
import Remix from './Remix';

const BirthdaySelector = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('');

    const birthYear = new Date().getFullYear();
    const years = Array.from(
        { length: birthYear - 2000 + 1 },
        (_, i) => birthYear - i,
    ).map((year) => ({
        value: year,
        label: `${year}년`,
    }));

    const months = Array.from({ length: 12 }, (_, i) => i + 1).map((month) => ({
        value: month,
        label: `${month.toString().padStart(2, '0')}월`,
    }));

    const getDaysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
    };

    const days =
        selectedYear && selectedMonth
            ? Array.from(
                  { length: getDaysInMonth(selectedYear, selectedMonth) },
                  (_, i) => i + 1,
              ).map((day) => ({
                  value: day,
                  label: `${day.toString().padStart(2, '0')}일`,
              }))
            : [];

    const formattedBirthday = [
        selectedYear,
        selectedYear && selectedMonth
            ? selectedMonth.toString().padStart(2, '0')
            : '',
        selectedYear && selectedMonth && selectedDay
            ? selectedDay.toString().padStart(2, '0')
            : '',
    ]
        .filter(Boolean)
        .join('-');

    return (
        <div className="form-birthday">
            <div className="block-label">생년월일</div>
            <div className="birthday-dropdown">
                {/* 년 */}
                <select
                    value={selectedYear}
                    onChange={(e) => {
                        setSelectedYear(Number(e.target.value));
                        setSelectedMonth('');
                        setSelectedDay('');
                    }}
                >
                    <option value="">년</option>
                    {years.map((year) => (
                        <option key={year.value} value={year.value}>
                            {year.label}
                        </option>
                    ))}
                </select>

                {/* 달 */}
                <select
                    value={selectedMonth}
                    onChange={(e) => {
                        setSelectedMonth(Number(e.target.value));
                        setSelectedDay('');
                    }}
                >
                    <option value="">월</option>
                    {months.map((month) => (
                        <option key={month.value} value={month.value}>
                            {month.label}
                        </option>
                    ))}
                </select>

                {/* 일 */}
                <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(Number(e.target.value))}
                >
                    <option value="">일</option>
                    {days.map((day) => (
                        <option key={day.value} value={day.value}>
                            {day.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="birthday-container">
                <div className="birthday-wrapper">{formattedBirthday}</div>
                <div className="birthday-selector">
                    <Remix iconName={'calendar-event-line'} />
                </div>
            </div>
        </div>
    );
};

export default BirthdaySelector;
