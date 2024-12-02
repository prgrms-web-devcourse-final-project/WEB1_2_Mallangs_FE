import { useState } from 'react';

const MallangTypeSelector = ({ types, onTypeSelect, defaultSelectedType }) => {
    const [isSelectedType, setIsSelectedType] = useState(
        defaultSelectedType || '',
    );

    const handleTypeSelect = (typeId) => {
        setIsSelectedType(typeId);
        onTypeSelect && onTypeSelect(typeId);
    };

    return (
        <div className="mallang-select-container">
            <div className="mallang-type-selector">
                {types.map((type) => (
                    <div
                        key={type.id}
                        className={`filter-label-wrapper ${isSelectedType === type.id ? 'active' : ''}`}
                        onClick={() => handleTypeSelect(type.id)}
                    >
                        <div className={`filter-label-${type.id}`}>
                            {type.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MallangTypeSelector;
