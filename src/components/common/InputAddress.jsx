import { useState } from 'react';
const InputAddress = ({ value, onChange }) => {
    const [region, setRegion] = useState(value?.region || '');
    const [building, setBuilding] = useState(value?.building || '');

    const handleRegionChange = (e) => {
        const newRegion = e.target.value;
        setRegion(newRegion);
        onChange({ region: newRegion, building });
    };

    const handleBuildingChange = (e) => {
        const newBuilding = e.target.value;
        setBuilding(newBuilding);
        onChange({ region, building: newBuilding });
    };
    return (
        <div className="address">
            <div className="address-container">
                <input
                    className="address-region"
                    placeholder="강원특별자치도 춘천시 공지로 어쩌고"
                    value={region}
                    onChange={handleRegionChange}
                ></input>
                <input
                    className="address-building"
                    placeholder="12동, 2415호 (240층)"
                    value={building}
                    onChange={handleBuildingChange}
                ></input>
            </div>
        </div>
    );
};

export default InputAddress;
