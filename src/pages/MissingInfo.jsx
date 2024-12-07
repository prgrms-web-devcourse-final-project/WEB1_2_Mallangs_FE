import { useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import Remix from '../components/common/Remix';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import ModalInstruction from '../components/common/ModalInstruction';
import dateFormat from '../utils/dateFormat';
import hourFormat from '../utils/hourFormat';

const MissingBasicInfo = ({ iconName, blockTitle, blockDescription }) => {
    return (
        <dl className="missing-basic-info-block">
            <dt className="missing-info-block-title">
                <Remix iconName={iconName} iconSize={0.6} />

                <span>{blockTitle}</span>
            </dt>

            <dd className="missing-info-block-description">
                <h6>{blockDescription}</h6>
            </dd>
        </dl>
    );
};

const MissingInfo = () => {
    const [currentLocation, setLocation] = useState({ lat: 36.0, lng: 127.0 });
    const sightingArray = [
        {
            reportID: 0,
            position: { lat: 36.0, lng: 127.0 },
        },
    ];

    return (
        <div>
            <div className="user-common-item-list">이미지 슬라이더</div>

            <ModalSectionTitle sectionTitle="실종된 말랑이 주요 특징" />

            <div className="user-common-item-list">
                <div
                    style={{
                        padding: '.8rem',
                        borderRadius: 'var(--rad-lg)',
                        backgroundColor: 'rgb(var(--clr-alert))',
                        color: 'rgb(var(--clr-text-on-tint))',
                        textAlign: 'center',
                    }}
                >
                    <h4>으아앙 흑흑 우리 예쁜 애기</h4>
                </div>
            </div>

            <ModalSectionTitle sectionTitle="실종 위치" />

            <div className="user-common-item-list">
                <Map
                    id="missing-map"
                    draggable={false}
                    center={currentLocation}
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

                <ModalInstruction
                    instEmoji="😹"
                    instHeadline="혹시 근처에서 비슷한 말랑이를 보셨나요?"
                    instContent="여러분의 작은 제보가 누군가의 소중한 가족을 찾는 단서가 될 수도 있어요."
                />

                <button type="button" id="button-goto-sighting-report">
                    <Remix iconName={'eye-2-line'} />

                    <span>목격 제보 보내기</span>
                </button>
            </div>

            <ModalSectionTitle sectionTitle="실종 상황 정보" />

            <div className="user-common-item-list">
                <div className="missing-basic-info-container">
                    <MissingBasicInfo
                        iconName={'map-pin-range-fill'}
                        blockTitle={'실종 추정 위치'}
                        blockDescription={
                            '부산시 서구 암남동 반도보라아파트아파트 아파트아파트 아파트아파트 어허어허'
                        }
                    />

                    <MissingBasicInfo
                        iconName={'calendar-close-fill'}
                        blockTitle={'실종일시'}
                        blockDescription={`${dateFormat(new Date('2024-01-01 12:34:56'))} ${hourFormat(new Date('2024-01-01 12:34:56'))}`}
                    />

                    <MissingBasicInfo
                        iconName={'phone-fill'}
                        blockTitle={'연락처'}
                        blockDescription={'010-5555-5555'}
                    />

                    <MissingBasicInfo
                        iconName={'hand-heart-fill'}
                        blockTitle={'사례방식 / 사례금'}
                        blockDescription={
                            '발견에 결정적인 제보를 해 주시는 분께 20만원'
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default MissingInfo;
