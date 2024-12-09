import { useState } from 'react';
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
import tempDB from '../datas/temp-db.json'; // 임시 가라 데이터

const { kakao } = window;

const MallangMap = () => {
    const [currentLocation, setLocation] = useState(getLatestLocation);
    const [currentCategory, setCategory] = useState('all');
    const [isMarkerOpen, setMarkerStatus] = useState(false);
    const [isAreaInfoShowing, setPanel] = useState(false);
    const [toolTipLabel, setTooltipLabel] =
        useState('이 위치에 글타래 작성하기');

    const setLocationInfo = useLocationStore((state) => state.setLocation);
    const { toggleModal, setEditMode, setModalType, setTotalData } =
        useModalStore((state) => state);

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

    const handleMapDrag = (map) => {
        // 지도 드래그로 중심점 이동시 핸들러
        const level = map.getLevel(); // 지도 확대율
        const bounds = map.getBounds(); // 지도 바운더리
        const latlng = map.getCenter(); // 지도 중심

        console.log('최종 위치 기준 바운더리:', bounds);

        setMarkerStatus(false);
        localStorage.setItem('mallangMapLatestLocation', latlng);
    };

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
                                        onMouseOver={(e) =>
                                            handleWriteMouseOver(e)
                                        }
                                        onMouseLeave={() =>
                                            setTooltipLabel(
                                                '이 위치에 글타래 작성하기',
                                            )
                                        }
                                        onClick={() => console.log(111)}
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
                                        onMouseOver={(e) =>
                                            handleWriteMouseOver(e)
                                        }
                                        onMouseLeave={() =>
                                            setTooltipLabel(
                                                '이 위치에 글타래 작성하기',
                                            )
                                        }
                                        onClick={() => console.log(222)}
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
                                        onMouseOver={(e) =>
                                            handleWriteMouseOver(e)
                                        }
                                        onMouseLeave={() =>
                                            setTooltipLabel(
                                                '이 위치에 글타래 작성하기',
                                            )
                                        }
                                        onClick={() => {
                                            setEditMode(true); // 모달 수정 모드
                                            setModalType('writeMode'); // 모달의 navigation 상태
                                            toggleModal(true); // 모달 열기
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

                {tempDB.threads.map((item, index) => {
                    return (
                        <>
                            <MapMarker
                                position={{
                                    lat: item.latitude,
                                    lng: item.longitude,
                                }}
                                image={{
                                    src:
                                        item.threadType === 'places'
                                            ? markerImageAlpha
                                            : item.threadType === 'missing'
                                              ? markerImageBeta
                                              : item.threadType === 'rescue'
                                                ? markerImageGamma
                                                : markerLogo,
                                    size: {
                                        width: 48,
                                        height: 48,
                                    },
                                }}
                                title={item.threadTitle}
                                key={index}
                                onClick={() => {
                                    setModalType(item.threadType);
                                    setTotalData(item);
                                    toggleModal(true);
                                }}
                            ></MapMarker>
                        </>
                    );
                })}
            </Map>
        </div>
    );
};

export default MallangMap;
