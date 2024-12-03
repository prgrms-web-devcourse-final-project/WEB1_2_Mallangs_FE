import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import MarkerCategory from './layout/MarkerCategory';
import getLatestLocation from '../utils/getLatestLocation';

const MallangMap = () => {
    const [currentCategory, setCategory] = useState('all');
    const [currentLocation, setLocation] = useState({ lat: 0, lng: 0 });

    const handleCategoryChange = (data) => {
        setCategory(data);

        console.log('현재 선택한 대분류:', currentCategory);
    };

    const convertLocation = () => {
        if (currentLocation.lat === 0 && currentLocation.lng === 0) {
            setLocation(getLatestLocation());
        }

        return currentLocation;
    };

    const handleMapDrag = (map) => {
        // 지도 드래그로 중심점 이동시 핸들러
        const level = map.getLevel(); // 지도 확대율
        const bounds = map.getBounds(); // 지도 바운더리
        const latlng = map.getCenter(); // 지도 중심

        console.log('최종 위치 기준 바운더리:', bounds);

        localStorage.setItem('mallangMapLatestLocation', latlng);
    };

    return (
        <div id="mallang-map-container">
            <Map
                id="mallang-map"
                center={convertLocation()}
                level={3}
                isPanto={true}
                onDragEnd={(map) => handleMapDrag(map)}
                onClick={(map, mouseEvent) => {
                    const coords = mouseEvent.latLng;
                    const curLat = coords.getLat();
                    const curLng = coords.getLng();
                    const curBounds = map.getBounds();

                    console.log('클릭 바운더리:', curBounds);

                    setLocation({ lat: curLat, lng: curLng });
                    localStorage.setItem('mallangMapLatestLocation', coords);
                }}
            >
                <MarkerCategory onNav={handleCategoryChange} />

                {currentLocation.lat === 0 &&
                currentLocation.lng === 0 ? null : (
                    <MapMarker
                        position={currentLocation}
                        onClick={() => setLocation(convertLocation())}
                    >
                        <div className="temp-marker">
                            꽃을 사랑하는 예쁜 소녀 루루 아름다운 꽃의 나라
                            천사가 되어 행복을 준다는 몰래 피어있는 신비의
                            무지개꽃을 찾아다닌다
                        </div>
                    </MapMarker>
                )}
            </Map>
        </div>
    );
};

export default MallangMap;
