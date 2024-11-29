import { useState } from 'react';
import Remix from './Remix';

const DropdownSelector = ({ optionList, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (optIndex) => {
        setSelectedOption(optIndex);
        onSelect(optionList[optIndex].value);
        setIsOpen(false);
    };

    return (
        <div className="dropdown-container">
            <div
                className={`dropdown-selected-label ${isOpen && 'on'}`}
                onClick={toggleDropdown}
            >
                <div className="selected-label-text">
                    {optionList[selectedOption].label}
                </div>

                <span></span>

                <div className="dropdown-arrow-button">
                    <Remix iconName={'arrow-down-s-fill'} />
                </div>
            </div>

            {isOpen && (
                <ul className="dropdown-menu">
                    {optionList.map((option, index) => (
                        <li
                            key={option.value}
                            className={`dropdown-menu-item ${selectedOption === index ? 'selected' : ''}`}
                            onClick={() => handleOptionSelect(index)}
                        >
                            <div className="dropdown-menu-item-label">
                                {option.label}
                            </div>

                            {selectedOption === index && (
                                <Remix iconName={'check-line'} />
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownSelector;
