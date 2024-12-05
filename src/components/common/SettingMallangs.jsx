import { useState } from 'react';

import GenderSelector from './GenderSelector';
import ToggleButton from './ToggleButton';
import InfoText from './InfoText';
import TypeSelector from './TypeSelector';
import BirthdaySelector from './BirthdaySelector';

// import DatePicker from 'react-datepicker';

const SettingMallangs = () => {
    const [isSelectedType, setIsSelectedType] = useState('');

    const handleTypeSelect = (typeId) => {
        setIsSelectedType(typeId);
    };

    const mallangTypes = [
        { id: 'dog', label: '강아지' },
        { id: 'cat', label: '고양이' },
        { id: 'bird', label: '새' },
        { id: 'etc', label: '기타' },
    ];

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

                {/* 말랑이 종류 선택 */}
                <div className="mallang-select-container">
                    <div className="label-type">종류 / 품종</div>
                    <TypeSelector
                        types={mallangTypes}
                        onTypeSelect={handleTypeSelect}
                        defaultSelectedType="dog"
                    />
                </div>

                <BirthdaySelector blockLabel={'생년월일'} />

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
                    {/* 성별 */}
                    <GenderSelector />
                </div>

                <div className="form-input-block">
                    {/* 중성화 여부 */}
                    <ToggleButton />
                </div>

                <div className="form-chip">
                    {/* 내장 칩 이식 여부 */}
                    <ToggleButton
                        label="내장 칩 이식 여부"
                        onLabel="이식함"
                        offLabel="이식하지 않음"
                    />
                </div>

                <div className="form-chip-number">
                    <InfoText />
                </div>
            </div>
        </div>
    );
};

export default SettingMallangs;
