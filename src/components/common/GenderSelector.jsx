import { useState } from 'react';
import Remix from './Remix';

const genderTypes = {
    genderless: {
        value: 'genderless',
        label: '중성',
        iconClassName: 'genderless-line',
    },
    male: {
        value: 'male',
        label: '남자',
        iconClassName: 'men-line',
    },
    female: {
        value: 'female',
        label: '여자',
        iconClassName: 'women-line',
    },
};

const GenderSelector = ({ label = '성별', onSelect, initialValue = null }) => {
    const [selectedGender, setSelectedGender] = useState(initialValue);

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
        if (onSelect) {
            onSelect(gender);
        }
    };

    return (
        <div className="gender-selector">
            <div className="block-label">{label}</div>

            <div className="checkbox-wrapper">
                {Object.values(genderTypes).map(({ value, iconClassName }) => (
                    <div
                        key={value}
                        className={`checkbox-group ${selectedGender === value ? 'active' : ''}`}
                        onClick={() => handleGenderSelect(value)}
                    >
                        <div className="frame">
                            <Remix iconName={iconClassName} />
                        </div>
                    </div>
                ))}

                <div className="checkbox-group-label">
                    {selectedGender ? genderTypes[selectedGender].label : ' '}
                </div>
            </div>
        </div>
    );
};

export default GenderSelector;
