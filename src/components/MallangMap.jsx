import { useKakaoLoader, Map, MapMarker } from 'react-kakao-maps-sdk';

const MallangMap = () => {
    useKakaoLoader({
        appkey: import.meta.env.VITE_KAKAO_APP_KEY,
        libraries: ['drawing'],
    });

    return (
        <div id="mallang-map-container">
            <Map
                id="mallang-map"
                center={{ lat: 35.183749, lng: 129.042256 }}
                level={3}
            >
                <MapMarker position={{ lat: 35.183749, lng: 129.042256 }}>
                    <div className="temp-marker">안에 사람들이 있잖아</div>
                </MapMarker>
            </Map>
        </div>
    );
};

export default MallangMap;
