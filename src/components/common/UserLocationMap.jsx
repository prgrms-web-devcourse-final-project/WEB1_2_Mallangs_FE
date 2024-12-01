import { useState, useEffect, useRef } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import Remix from './Remix';

const { kakao } = window;

const UserLocationMap = ({
    locationType = 'address',
    onLocationSelect = () => {},
}) => {
    useKakaoLoader({
        appkey: import.meta.env.VITE_KAKAO_APP_KEY,
        libraries: ['services'],
    });

    const defaultCenter = {
        lat: 35.183749,
        lng: 129.042256,
    };

    const mapRef = useRef();
    const [mapCenter, setMapCenter] = useState(defaultCenter);
    const [locationInfo, setLocationInfo] = useState({
        administrativeDong: '',
        roadAddress: '',
        jibunAddress: '',
        coordinates: null,
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setMapCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.log('사용자 위치를 가져올 수 없습니다:', error);
                },
            );
        }
    }, []);

    const handleClick = (_, mouseEvent) => {
        const latlng = mouseEvent.latLng;
        const newCoordinates = {
            lat: latlng.getLat(),
            lng: latlng.getLng(),
        };

        if (mapRef.current) {
            mapRef.current.panTo(
                new kakao.maps.LatLng(newCoordinates.lat, newCoordinates.lng),
            );
        }

        const geocoder = new kakao.maps.services.Geocoder();

        if (locationType === 'administrativeDong') {
            geocoder.coord2RegionCode(
                latlng.getLng(),
                latlng.getLat(),
                (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        const region = result.find(
                            (item) => item.region_type === 'H',
                        );

                        const newLocationInfo = {
                            administrativeDong: region
                                ? region.address_name
                                : '',
                            roadAddress: '',
                            jibunAddress: '',
                            coordinates: newCoordinates,
                        };

                        setLocationInfo(newLocationInfo);
                        onLocationSelect?.(newLocationInfo);
                    }
                },
            );
        } else {
            geocoder.coord2Address(
                latlng.getLng(),
                latlng.getLat(),
                (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        const newLocationInfo = {
                            administrativeDong: '',
                            roadAddress: result[0].road_address
                                ? `도로명주소: ${result[0].road_address.address_name}`
                                : '',
                            jibunAddress: `지번주소: ${result[0].address.address_name}`,
                            coordinates: newCoordinates,
                        };

                        setLocationInfo(newLocationInfo);
                        onLocationSelect?.(newLocationInfo);
                    }
                },
            );
        }
    };

    const getDisplayText = () => {
        if (!locationInfo.coordinates) return '위치를 지도에 표시해 주세요.';

        if (locationType === 'administrativeDong') {
            return locationInfo.administrativeDong || '행정동을 불러오는 중...';
        } else {
            if (!locationInfo.roadAddress && !locationInfo.jibunAddress) {
                return '주소를 불러오는 중...';
            }
            return (
                <div>
                    {locationInfo.roadAddress && (
                        <div>{locationInfo.roadAddress}</div>
                    )}
                    <div>{locationInfo.jibunAddress}</div>
                </div>
            );
        }
    };

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
                    center={mapCenter}
                    level={3}
                    onClick={handleClick}
                    ref={mapRef}
                >
                    {locationInfo.coordinates && (
                        <MapMarker position={locationInfo.coordinates}>
                            <div className="temp-location-marker">
                                {getDisplayText()}
                            </div>
                        </MapMarker>
                    )}
                </Map>
            </div>
            <div className="map-bottom-content">
                <div className="notification-map-content">
                    <div className="icon-location-area">
                        <Remix iconName={'map-pin-range-fill'} />
                    </div>
                    <div className="map-marker">{getDisplayText()}</div>
                </div>
                <div className="button-map-content">
                    <button
                        className="button-selection-submit"
                        onClick={() => {
                            if (locationInfo.coordinates) {
                                console.log(
                                    'Selected Coordinates:',
                                    locationInfo.coordinates,
                                );
                                console.log(
                                    'Selected Road Address:',
                                    locationInfo.roadAddress,
                                );
                                console.log(
                                    'Selected Jibun Address:',
                                    locationInfo.jibunAddress,
                                );
                                console.log(
                                    'Selected Administrative Dong:',
                                    locationInfo.administrativeDong,
                                );
                            }
                        }}
                    >
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
