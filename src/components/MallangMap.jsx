import { useState } from 'react';
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import AreaInfoPanel from './layout/AreaInfoPanel';
import MarkerCategory from './layout/MarkerCategory';
import getLatestLocation from '../utils/getLatestLocation';

const MallangMap = () => {
    const [currentLocation, setLocation] = useState({ lat: 0, lng: 0 });
    const [currentCategory, setCategory] = useState('all');
    const [isMarkerOpen, setMarkerStatus] = useState(false);
    const [isAreaInfoShowing, setPanel] = useState(false);

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
            <AreaInfoPanel
                isAreaInfoShowing={isAreaInfoShowing}
                setPanel={setPanel}
            />

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
                <MarkerCategory
                    isAreaInfoShowing={isAreaInfoShowing}
                    onNav={handleCategoryChange}
                />

                {currentLocation.lat === 0 &&
                currentLocation.lng === 0 ? null : (
                    <CustomOverlayMap
                        position={currentLocation}
                        xAnchor={0.5}
                        yAnchor={1}
                        clickable={true}
                    >
                        <button onMouseOver={() => setMarkerStatus(true)}>
                            여는 버튼
                        </button>

                        {isMarkerOpen && (
                            <div className="temp-marker">
                                <div className="marker-label">
                                    여기에 만들고 싶은 글타래
                                </div>

                                <div className="marker-controls">
                                    <button
                                        type="button"
                                        className="button-marker-write"
                                    >
                                        시설 / 업체
                                    </button>

                                    <button
                                        type="button"
                                        className="button-marker-write"
                                    >
                                        실종신고
                                    </button>

                                    <button
                                        type="button"
                                        className="button-marker-write"
                                    >
                                        구조요청
                                    </button>
                                </div>
                            </div>
                        )}
                    </CustomOverlayMap>
                )}
            </Map>
        </div>
    );
};

export default MallangMap;
