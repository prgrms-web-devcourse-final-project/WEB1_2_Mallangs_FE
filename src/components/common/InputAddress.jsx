import useLocationStore from '../../stores/locationStore';

const InputAddress = () => {
    const roadAddress = useLocationStore(
        (state) => state.locationStatus.roadAddress,
    );
    const jibunAddress = useLocationStore(
        (state) => state.locationStatus.jibunAddress,
    );
    const building = useLocationStore((state) => state.locationStatus.building);
    const setBuilding = useLocationStore((state) => state.setBuilding);

    const handleBuildingChange = (e) => {
        setBuilding(e.target.value);
    };

    // 도로명주소가 있으면 사용하고, 없으면 지번주소를 사용
    const displayAddress = roadAddress || jibunAddress;

    return (
        <div className="address">
            <div className="address-container">
                <input
                    className="address-region"
                    placeholder="강원특별자치도 춘천시 공지로 어쩌고"
                    value={displayAddress}
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
