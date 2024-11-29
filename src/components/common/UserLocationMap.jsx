import { useKakaoLoader, Map, MapMarker } from 'react-kakao-maps-sdk';
import Remix from './Remix';

const UserLocationMap = () => {
    useKakaoLoader({
        appkey: import.meta.env.VITE_KAKAO_APP_KEY,
        libraries: ['drawing'],
    });

    return (
        <div className="user-location-container">
            <div className="section-titlebar">
                <div className="icon-hashtag">
                    <Remix iconName={'hashtag'} />
                </div>
                <span className="section-search-label">현재 위치로 검색</span>
            </div>
            <div id="user-location-map-container">
                <Map
                    id="user-location-map"
                    center={{ lat: 35.183749, lng: 129.042256 }}
                    level={3}
                >
                    <MapMarker position={{ lat: 35.183749, lng: 129.042256 }}>
                        <div className="temp-location-marker">마커다</div>
                    </MapMarker>
                </Map>
            </div>
            <div className="map-bottom-content">
                <div className="notification-map-content">
                    <div className="icon-location-area">
                        <Remix iconName={'map-pin-range-fill'} />
                    </div>
                    <span className="map-marker">
                        목격 위치 직접 표시일까 현재 위치 표시일까
                    </span>
                </div>
                <div className="button-map-content">
                    <button className="button-selection-submit">
                        <div className="icon-check">
                            <Remix iconName={'check-line'} />
                        </div>
                        <span className="button-map-label">선택완료</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserLocationMap;
