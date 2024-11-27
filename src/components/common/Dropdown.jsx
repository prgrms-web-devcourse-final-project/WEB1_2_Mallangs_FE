import { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({
        label: '진행중',
        value: 'progress',
    });

    const options = [
        { label: '진행중', value: 'progress' },
        { label: '발견함', value: 'find' },
        { label: '숨기기', value: 'hide' },
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown-container">
            <div className="option-item" onClick={toggleDropdown}>
                <div className="option-value">{selectedOption.label}</div>

                <div className="separator-line"></div>
                <div className="arrow-button">
                    <img
                        className="icon-arrow"
                        src="src/assets/images/icon-arrow.svg"
                    />
                </div>
            </div>

            {isOpen && (
                <div className="dropdown-menu">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`dropdown-menu-item ${selectedOption.value === option.value ? 'active' : ''}`}
                            onClick={() => handleOptionSelect(option)}
                        >
                            <div className="menu-item-label">
                                {option.label}
                            </div>
                            {selectedOption.value === option.value && (
                                <img
                                    className="icon-checked"
                                    src="src/assets/images/icon-checked.svg"
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
