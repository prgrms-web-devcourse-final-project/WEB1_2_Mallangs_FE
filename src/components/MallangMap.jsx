import { Map, MapMarker } from 'react-kakao-maps-sdk';
import MarkerCategory from './layout/MarkerCategory';

const MallangMap = () => {
    return (
        <div id="mallang-map-container">
            <MarkerCategory />

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
