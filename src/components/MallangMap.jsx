import { useState, useCallback, useMemo } from 'react';
import debounce from 'lodash/debounce';
import { Map, CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';

import useLocationStore from '../stores/locationStore';
import { useModalStore } from '../stores/modalStatus';

import Remix from './common/Remix';
import ToolTip from './common/ToolTip';
import AreaInfoPanel from './layout/AreaInfoPanel';
import MarkerCategory from './layout/MarkerCategory';

import getLatestLocation from '../utils/getLatestLocation';

import markerLogo from '../assets/images/logo.png';
import markerImageAlpha from '../assets/images/marker-alpha.png';
import markerImageBeta from '../assets/images/marker-beta.png';
import markerImageGamma from '../assets/images/marker-gamma.png';
import { getArticleMarkers } from '../api/threadApi';
// import tempDB from '../datas/temp-db.json'; // 임시 가라 데이터

const { kakao } = window;

const MallangMap = () => {
    const [currentLocation, setLocation] = useState(getLatestLocation);
    const [currentCategory, setCategory] = useState('all');
    const [isMarkerOpen, setMarkerStatus] = useState(false);
    const [isAreaInfoShowing, setPanel] = useState(false);
    const [toolTipLabel, setTooltipLabel] =
        useState('이 위치에 글타래 작성하기');
    const [markers, setMarkers] = useState([]);

    const setLocationInfo = useLocationStore((state) => state.setLocation);
    const {
        toggleModal,
        setEditMode,
        setModalType,
        setTotalData,
        setSlaveIndex,
    } = useModalStore((state) => state);

    const handleCategoryChange = (data) => {
        setCategory(data);
        console.log('현재 선택한 대분류:', data);
    };

    const convertLocation = () => {
        if (currentLocation.lat === 0 && currentLocation.lng === 0) {
            setLocation(getLatestLocation());
        }
        return currentLocation;
    };

    const loadMarkers = useCallback(
        debounce(async (bounds, level) => {
            try {
                if (level > 7) {
                    setMarkers([]);
                    return;
                }

                const markerData = await getArticleMarkers(bounds);

                if (level > 5) {
                    setMarkers(markerData.slice(0, 50) || []);
                    return;
                }

                setMarkers(markerData || []);
            } catch (error) {
                console.error('마커 데이터 로드 실패:', error);
            }
        }, 300),
        [],
    );

    const handleWriteMouseOver = (e) => {
        setTooltipLabel(e.target.dataset.tooltipText);
    };

    const getAddressFromCoords = (latlng) => {
        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.coord2Address(
            latlng.getLng(),
            latlng.getLat(),
            (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    geocoder.coord2RegionCode(
                        latlng.getLng(),
                        latlng.getLat(),
                        (regionResult, regionStatus) => {
                            if (
                                regionStatus === kakao.maps.services.Status.OK
                            ) {
                                const region = regionResult.find(
                                    (item) => item.region_type === 'H',
                                );

                                const locationData = {
                                    coordinates: {
                                        lat: latlng.getLat(),
                                        lng: latlng.getLng(),
                                    },
                                    roadAddress: result[0].road_address
                                        ? result[0].road_address.address_name
                                        : '',
                                    jibunAddress:
                                        result[0].address.address_name,
                                    administrativeDong: region
                                        ? region.address_name
                                        : '',
                                };

                                setLocationInfo(locationData);
                            }
                        },
                    );
                }
            },
        );
    };

    const filteredMarkers = useMemo(() => {
        console.log('현재 카테고리:', currentCategory); // 필터링 시점에서 카테고리 확인
        if (currentCategory === 'all') return markers;

        return markers.filter((marker) => {
            switch (currentCategory) {
                case 'missing':
                    return marker.type === 'LOST';
                case 'rescue':
                    return marker.type === 'RESCUE';
                case 'places':
                    return marker.type === 'PLACE';
                default:
                    return true;
            }
        });
    }, [markers, currentCategory]);

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
                onIdle={(map) => {
                    const bounds = map.getBounds();
                    const level = map.getLevel();
                    const center = map.getCenter();

                    localStorage.setItem('mallangMapLatestLocation', center);
                    loadMarkers(bounds, level);
                }}
                onClick={(map, mouseEvent) => {
                    const coords = mouseEvent.latLng;
                    const curLat = coords.getLat();
                    const curLng = coords.getLng();
                    const curBounds = map.getBounds();

                    console.log('클릭 바운더리:', curBounds);
                    setLocation({ lat: curLat, lng: curLng });
                    if (isMarkerOpen) setMarkerStatus(false);
                    // 클릭한 좌표의 주소 정보 가져오기
                    getAddressFromCoords(coords);
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
                        <div className="marker-item">
                            <ToolTip
                                altMessage={toolTipLabel}
                                direction="top"
                            />

                            <button
                                className={`button-marker-selector-opener ${isMarkerOpen ? 'on' : undefined}`}
                                onClick={() => setMarkerStatus(!isMarkerOpen)}
                            >
                                <span>글타래 작성하기</span>
                            </button>

                            <div
                                className={`marker-selector-container ${isMarkerOpen ? 'on' : undefined}`}
                            >
                                <div className="marker-controls">
                                    <button
                                        type="button"
                                        className="button-marker-write missing"
                                        data-tooltip-text={'실종신고'}
                                        onMouseOver={handleWriteMouseOver}
                                        onMouseLeave={() =>
                                            setTooltipLabel(
                                                '이 위치에 글타래 작성하기',
                                            )
                                        }
                                        onClick={() => {
                                            setEditMode(true);
                                            setModalType('writeMode');
                                            setSlaveIndex(1);
                                            toggleModal(true);
                                        }}
                                    >
                                        <div>
                                            <Remix
                                                iconName={'search-eye-line'}
                                                iconSize={1.2}
                                            />
                                        </div>
                                    </button>

                                    <button
                                        type="button"
                                        className="button-marker-write places"
                                        data-tooltip-text={'시설 / 업체'}
                                        onMouseOver={handleWriteMouseOver}
                                        onMouseLeave={() =>
                                            setTooltipLabel(
                                                '이 위치에 글타래 작성하기',
                                            )
                                        }
                                        onClick={() => {
                                            setEditMode(true);
                                            setModalType('writeMode');
                                            setSlaveIndex(0);
                                            toggleModal(true);
                                        }}
                                    >
                                        <div>
                                            <Remix
                                                iconName={'map-pin-add-fill'}
                                                iconSize={1.2}
                                            />
                                        </div>
                                    </button>

                                    <button
                                        type="button"
                                        className="button-marker-write rescue"
                                        data-tooltip-text={'구조요청'}
                                        onMouseOver={handleWriteMouseOver}
                                        onMouseLeave={() =>
                                            setTooltipLabel(
                                                '이 위치에 글타래 작성하기',
                                            )
                                        }
                                        onClick={() => {
                                            setEditMode(true);
                                            setModalType('writeMode');
                                            setSlaveIndex(2);
                                            toggleModal(true);
                                        }}
                                    >
                                        <div>
                                            <Remix
                                                iconName={'hand-heart-fill'}
                                                iconSize={1.2}
                                            />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </CustomOverlayMap>
                )}

                {/* {markers.map((item, index) => ( */}
                {filteredMarkers.map((item, index) => (
                    <MapMarker
                        key={item.articleId || index}
                        position={{
                            lat: item.latitude,
                            lng: item.longitude,
                        }}
                        image={{
                            src:
                                item.type === 'PLACE'
                                    ? markerImageAlpha
                                    : item.type === 'LOST'
                                      ? markerImageBeta
                                      : item.type === 'RESCUE'
                                        ? markerImageGamma
                                        : markerLogo,
                            size: {
                                width: 48,
                                height: 48,
                            },
                        }}
                        title={item.title}
                        onClick={() => {
                            console.log(`Marker ${index}:`, item);
                            setModalType(item.type.toLowerCase());
                            setTotalData(item);
                            toggleModal(true);
                        }}
                    />
                ))}
            </Map>
        </div>
    );
};

export default MallangMap;
