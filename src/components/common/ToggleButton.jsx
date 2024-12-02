import React, { useState } from 'react';

const ToggleButton = ({
    label = '중성화 여부',
    onLabel = '중성화 완료',
    offLabel = '중성화 미완료',
    initialState = false,
    onToggle,
}) => {
    const [isToggled, setIsToggled] = useState(initialState);

    const handleToggle = () => {
        const newState = !isToggled;
        setIsToggled(newState);
        if (onToggle) {
            onToggle(newState);
        }
    };

    return (
        <div className="toggle-section">
            <div className="block-label">{label}</div>

            <div className="toggle-div">
                <div
                    className={`toggle-container ${isToggled ? 'on' : ''}`}
                    onClick={handleToggle}
                >
                    <div className="toggle-button" />
                </div>

                <div className="toggle-label">
                    {isToggled ? onLabel : offLabel}
                </div>
            </div>
        </div>
    );
};

export default ToggleButton;
