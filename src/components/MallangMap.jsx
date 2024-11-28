import { useKakaoLoader, Map, MapMarker } from 'react-kakao-maps-sdk';
import Remix from './common/Remix';
import DropdownSelector from './common/DropdownSelector';
import tempOptionList from '../datas/temp-options-list.json'; // 임시 드롭다운 옵션 데이터

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

            <div id="main-modal-backdrop">
                <div id="main-modal">
                    <section id="main-modal-cover">
                        <div className="cover-controls">
                            <button type="button" className="buttons">
                                <Remix
                                    iconName={'edit-box-line'}
                                    iconSize={0.6}
                                />

                                <span>글타래 수정</span>
                            </button>

                            <button type="button" className="buttons">
                                <Remix
                                    iconName={'delete-bin-fill'}
                                    iconSize={0.6}
                                />

                                <span>삭제</span>
                            </button>

                            <DropdownSelector
                                optionList={tempOptionList}
                                onSelect={(data) =>
                                    console.log('드롭다운에서 선택한 값:', data)
                                }
                            />
                        </div>

                        <div className="cover-descriptions-container">
                            <dl className="cover-descriptions">
                                <dt className="thread-title-container">
                                    <h5 className="thread-title">
                                        <Remix
                                            iconName={'shield-check-fill'}
                                            iconSize={1}
                                        />

                                        <span className="thread-title-content">
                                            글타래 제목
                                        </span>
                                    </h5>
                                </dt>

                                <dd className="thread-category-container">
                                    <Remix iconName={'search-eye-line'} />
                                    <span>분류 1</span>
                                    <span>·</span>
                                    <span>분류 2</span>
                                    <span>·</span>
                                    <span>분류 3</span>
                                    <span>·</span>
                                    <span>분류 4</span>
                                </dd>
                            </dl>
                        </div>
                    </section>

                    <section id="main-modal-body">
                        <div id="main-modal-sidebar"></div>
                        <div id="main-modal-content-container">
                            <nav id="main-modal-navigation"></nav>
                            <div id="main-modal-content"></div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MallangMap;
