import { useState } from 'react';
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import Remix from './common/Remix';
import ToolTip from './common/ToolTip';
import AreaInfoPanel from './layout/AreaInfoPanel';
import MarkerCategory from './layout/MarkerCategory';
import getLatestLocation from '../utils/getLatestLocation';

const MallangMap = () => {
    const [currentLocation, setLocation] = useState({ lat: 0, lng: 0 });
    const [currentCategory, setCategory] = useState('all');
    const [isMarkerOpen, setMarkerStatus] = useState(false);
    const [isAreaInfoShowing, setPanel] = useState(false);
    const [toolTipLabel, setTooltipLabel] =
        useState('이 위치에 글타래 작성하기');

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

        setMarkerStatus(false);
        localStorage.setItem('mallangMapLatestLocation', latlng);
    };

    const handleWriteMouseOver = (e) => {
        setTooltipLabel(e.target.dataset.tooltipText);
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
                                        onClick={() => console.log(333)}
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
            </Map>
        </div>
    );
};

export default MallangMap;
