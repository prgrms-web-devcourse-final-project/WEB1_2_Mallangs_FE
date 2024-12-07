import { useRef, useState } from 'react';
import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import Remix from '../components/common/Remix';

const MissingSightingReport = () => {
    const sightingDateTime = useRef();
    const sitPhotos = useRef();
    const sitDescription = useRef();
    const [currentLocation, setLocation] = useState({ lat: 36.0, lng: 127.0 });

    const handleFormData = () => {
        console.log({
            lat: currentLocation.lat,
            lng: currentLocation.lng,
            dateTime: sightingDateTime.current.value,
            pics: sitPhotos.current.value,
            desc: sitDescription.current.value,
        });
    };

    return (
        <div>
            <div className="sighting-map-container">
                <div className="sighting-map-controls">
                    <button
                        type="button"
                        id="button-go-back-to-thread"
                        title="글타래로 돌아가기"
                    >
                        <Remix iconName={'corner-up-left-line'} />
                    </button>

                    <p>글타래로 돌아가기</p>
                </div>

                <Map
                    id="sighting-map"
                    center={currentLocation}
                    level={4}
                    isPanto={true}
                    onClick={(map, mouseEvent) => {
                        const coords = mouseEvent.latLng;
                        const curLat = coords.getLat();
                        const curLng = coords.getLng();

                        setLocation({ lat: curLat, lng: curLng });
                    }}
                >
                    <CustomOverlayMap
                        position={currentLocation}
                        yAnchor={1}
                        clickable={false}
                    >
                        <div className="sighting-marker">
                            <Remix
                                iconName={'information-2-fill'}
                                iconSize={1.2}
                            />
                        </div>
                    </CustomOverlayMap>
                </Map>
            </div>

            <hr />

            <div className="sighting-instruction">
                <Remix iconName={'map-pin-range-fill'} iconSize={0.6} />

                <p>목격하신 위치를 지도에 표시해 주세요.</p>
            </div>

            <hr />

            <form id="form-sighting-report" className="user-common-item-list">
                <div className="user-common-labeled-input">
                    <p className="common-input-labels">
                        <Remix iconName={'time-fill'} />

                        <span>이 동물을 언제 목격하셨나요?</span>
                    </p>

                    <input
                        type="datetime-local"
                        id="input-sighting-datetime"
                        max={
                            // 오늘 날짜까지로 선택 범위 제한
                            new Date(
                                Date.now() -
                                    new Date().getTimezoneOffset() * 60000,
                            )
                                .toISOString()
                                .substring(0, 16)
                        }
                        ref={sightingDateTime}
                        onChange={handleFormData}
                    />
                </div>

                <div className="user-common-labeled-input">
                    <p className="common-input-labels">
                        <Remix iconName={'image-circle-fill'} />

                        <span>목격하신 상황 또는 동물의 사진이 있나요?</span>
                    </p>
                    <input
                        type="file"
                        id="input-sighting-images"
                        multiple
                        accept=""
                        disabled
                        ref={sitPhotos}
                        onChange={handleFormData}
                    />
                    이미지 업로더 들어갈 자리
                </div>

                <div className="user-common-labeled-input">
                    <p className="common-input-labels">
                        <Remix iconName={'chat-1-fill'} />

                        <span>
                            목격하신 상황을 자세히 설명해 주시면 큰 도움이 될 수
                            있어요.
                        </span>
                    </p>

                    <textarea
                        id="input-sighting-description"
                        minLength={10}
                        maxLength={500}
                        placeholder="자세한 설명을 작성해 주세요. (최대 500 자)"
                        ref={sitDescription}
                        onKeyUp={handleFormData}
                    ></textarea>
                </div>

                <button
                    type="button"
                    id="button-send-sighting-report"
                    className="buttons"
                >
                    <Remix iconName={'check-line'} />

                    <span>작성완료</span>
                </button>
            </form>
        </div>
    );
};

export default MissingSightingReport;
