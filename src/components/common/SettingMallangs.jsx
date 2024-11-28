import GenderlessIcon from '../../assets/images/icon-genderless.svg?react';
import MaleIcon from '../../assets/images/icon-male.svg?react';
import FemaleIcon from '../../assets/images/icon-female.svg?react';
import InformationIcon from '../../assets/images/icon-information.svg?react';
import CalendarIcon from '../../assets/images/icon-calendar.svg?react';

import { useState } from 'react';

// import DatePicker from 'react-datepicker';

const SettingMallangs = () => {
    const [isSelectedType, setIsSelectedType] = useState(null);
    const [isSelectedGender, setIsSelectedGender] = useState(null);
    const [isNeutered, setIsNeutered] = useState(false);
    const [hasChip, setHasChip] = useState(false);
    // const [selectedDate, setSelectedDate] = useState(new Date());

    const mallangTypes = [
        { id: 'dog', label: '강아지' },
        { id: 'cat', label: '고양이' },
        { id: 'bird', label: '새' },
        { id: 'etc', label: '기타' },
    ];

    const genderLabels = {
        genderless: '중성',
        male: '남자',
        female: '여자',
    };

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    const handleGenderSelect = (gender) => {
        setIsSelectedGender(gender);
    };

    return (
        <div className="setting-mallangs">
            <div className="add-mallang-form">
                <div className="large-text-input">
                    <input
                        type="text"
                        placeholder="말랑이 이름 입력"
                        className="name-input"
                    />
                </div>

                <div className="mallang-select-container">
                    <div className="label-type">종류 / 품종</div>

                    <div className="mallang-type-selector">
                        {mallangTypes.map((type) => (
                            <div
                                key={type.id}
                                className={`filter-label-wrapper ${isSelectedType === type.id ? 'active' : ''}`}
                                onClick={() => setIsSelectedType(type.id)}
                            >
                                <div className={`filter-label-${type.id}`}>
                                    {type.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="form-birthday">
                    <div className="block-label">생년월일</div>

                    <div className="birthday-container">
                        {/* <div className="birthday-wrapper">
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="yyyy-MM-dd"
                            />
                        </div> */}

                        <div className="birthday-wrapper">2024-07-15</div>
                        <div className="birthday-selector">
                            <CalendarIcon />
                        </div>
                    </div>
                </div>

                <div className="form-killogram">
                    <div className="block-label">몸무게</div>

                    <div className="killogram">
                        <input
                            type="number"
                            step="0.1"
                            placeholder="0.0"
                            className="killogram-input"
                        />
                        <div className="killogram-kg">kg</div>
                    </div>
                </div>

                <div className="form-gender">
                    <div className="block-label">성별</div>

                    <div className="checkbox-wrapper">
                        <div
                            className={`checkbox-group ${isSelectedGender === 'genderless' ? 'active' : ''}`}
                            onClick={() => handleGenderSelect('genderless')}
                        >
                            <div className="frame">
                                <GenderlessIcon />
                            </div>
                        </div>
                        <div
                            className={`checkbox-group ${isSelectedGender === 'male' ? 'active' : ''}`}
                            onClick={() => handleGenderSelect('male')}
                        >
                            <div className="frame">
                                <MaleIcon />
                            </div>
                        </div>
                        <div
                            className={`checkbox-group ${isSelectedGender === 'female' ? 'active' : ''}`}
                            onClick={() => handleGenderSelect('female')}
                        >
                            <div className="frame">
                                <FemaleIcon />
                            </div>
                        </div>

                        <div className="checkbox-group-label">
                            {genderLabels[isSelectedGender]}
                        </div>
                    </div>
                </div>

                <div className="form-input-block">
                    <div className="block-label">중성화 여부</div>

                    <div className="toggle-div">
                        <div
                            className={`toggle-container ${isNeutered ? 'on' : ''}`}
                            onClick={() => setIsNeutered(!isNeutered)}
                        >
                            <div className="toggle-button" />
                        </div>

                        <div className="toggle-label">
                            {isNeutered ? '중성화 완료' : '중성화 미완료'}
                        </div>
                    </div>
                </div>

                <div className="form-chip">
                    <div className="block-label">내장 칩 이식 여부</div>

                    <div className="toggle-div">
                        <div
                            className={`toggle-container ${hasChip ? 'on' : ''}`}
                            onClick={() => setHasChip(!hasChip)}
                        >
                            <div className="toggle-button" />
                        </div>

                        <div className="toggle-label">
                            {hasChip ? '이식함' : '이식하지 않음'}
                        </div>
                    </div>
                </div>

                <div className="form-chip-number">
                    <div className="block-label">칩 인식번호</div>

                    <div className="chip-number-div">
                        <input
                            type="number"
                            placeholder="410020000012345"
                            className="chip-number"
                        ></input>
                    </div>

                    <div className="info">
                        <div className="info-icon">
                            <InformationIcon />
                        </div>

                        <p className="help-text">
                            인식번호는 어떻게 확인할 수 있나요?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingMallangs;
