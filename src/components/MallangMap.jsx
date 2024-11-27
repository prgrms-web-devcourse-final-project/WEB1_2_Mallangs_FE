import { useKakaoLoader, Map, MapMarker } from 'react-kakao-maps-sdk';
import Remix from './common/Remix';

const MallangMap = () => {
    useKakaoLoader({
        appkey: import.meta.env.VITE_KAKAO_APP_KEY,
        libraries: ['drawing'],
    });

    return (
        <Map
            center={{ lat: 35.183749, lng: 129.042256 }}
            level={3}
            style={{ width: '100%', height: '100vh' }}
        >
            <MapMarker position={{ lat: 35.183749, lng: 129.042256 }}>
                <div className="temp-marker">안에 사람들이 있잖아</div>
            </MapMarker>
        </Map>
    );
};

export default MallangMap;
