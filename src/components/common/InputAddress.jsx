import { useEffect, useMemo } from 'react';
import useLocationStore from '../../stores/locationStore';

const InputAddress = ({ onAddressChange }) => {
    const roadAddress = useLocationStore((state) => state.roadAddress);
    const jibunAddress = useLocationStore((state) => state.jibunAddress);
    const building = useLocationStore((state) => state.building);
    const coordinates = useLocationStore((state) => state.coordinates);
    const setBuilding = useLocationStore((state) => state.setBuilding);

    const handleBuildingChange = (e) => {
        setBuilding(e.target.value);
    };

    const displayAddress = roadAddress || jibunAddress;

    // 메모이제이션된 주소 정보 객체
    const addressInfo = useMemo(
        () => ({
            roadAddress,
            jibunAddress,
            building,
            coordinates,
        }),
        [roadAddress, jibunAddress, building, coordinates],
    );

    useEffect(() => {
        onAddressChange?.(addressInfo);
    }, [addressInfo, onAddressChange]);

    return (
        <div className="address">
            <div className="address-container">
                <input
                    className="address-region"
                    placeholder="강원특별자치도 춘천시 공지로 어쩌고"
                    value={displayAddress || ''}
                    readOnly
                />
                <input
                    className="address-building"
                    placeholder="상세주소를 입력해주세요!"
                    value={building || ''}
                    onChange={handleBuildingChange}
                />
            </div>
        </div>
    );
};

export default InputAddress;
