import Swal from 'sweetalert2';
import Remix from '../common/Remix';
import dateFormat from '../../utils/dateFormat';

const AreaThreadArticle = ({ articleObject }) => {
    // 지역 글타래 미리보기 아이템 (내장 컴포넌트)
    return (
        <li className="area-thread-item">
            <div className="area-thread-item-image-wrapper">
                {articleObject.images ? (
                    <img
                        src={articleObject.previewImage}
                        alt="글타래 이미지 미리보기"
                    />
                ) : (
                    <div></div>
                )}
            </div>
            <dl className="area-thread-item-descriptions">
                <dt className="area-thread-item-title">
                    {articleObject.title}
                </dt>
                <dd className="area-thread-item-daterange">
                    <span>{dateFormat(articleObject.dateBegin)}</span>~
                    <span>{dateFormat(articleObject.dateEnds)}</span>
                </dd>
            </dl>
        </li>
    );
};

const AreaInfoPanel = ({ isActive, onShow }) => {
    const randomColor = () => {
        // 사용자 아이콘 배경에 랜덤 색상 부여
        let R = Math.floor(Math.random() * 205 + 50);
        let G = Math.floor(Math.random() * 205 + 50);
        let B = Math.floor(Math.random() * 205 + 50);
        return `${R} ${G} ${B}`;
    };

    const callSwalDemo = () => {
        Swal.fire({
            title: 'SweetAlert2 데모',
            text: '우리 동네 보기',
            icon: 'info',
        });
    };

    const tempTown = {
        // 임시 지역 데이터
        townCity: '부산광역시',
        townProvince: '부산진구',
        townName: '연지동',
        userTotal: 2412474,
        currentThreads: [
            {
                threadType: 'missing',
                previewImage: null,
                title: '실종된 아이를 찾아요',
                dateBegin: '2024-01-01',
                dateEnds: '2024-12-31',
            },
            {
                threadType: 'missing',
                previewImage: null,
                title: '실종된 아이를 찾아요',
                dateBegin: '2024-01-01',
                dateEnds: '2024-12-31',
            },
            {
                threadType: 'missing',
                previewImage: null,
                title: '실종된 아이를 찾아요',
                dateBegin: '2024-01-01',
                dateEnds: '2024-12-31',
            },
            {
                threadType: 'missing',
                previewImage: null,
                title: '실종된 아이를 찾아요',
                dateBegin: '2024-01-01',
                dateEnds: '2024-12-31',
            },
            {
                threadType: 'missing',
                previewImage: null,
                title: '실종된 아이를 찾아요',
                dateBegin: '2024-01-01',
                dateEnds: '2024-12-31',
            },
            {
                threadType: 'missing',
                previewImage: null,
                title: '실종된 아이를 찾아요',
                dateBegin: '2024-01-01',
                dateEnds: '2024-12-31',
            },
            {
                threadType: 'missing',
                previewImage: null,
                title: '실종된 아이를 찾아요',
                dateBegin: '2024-01-01',
                dateEnds: '2024-12-31',
            },
            {
                threadType: 'missing',
                previewImage: null,
                title: '실종된 아이를 찾아요',
                dateBegin: '2024-01-01',
                dateEnds: '2024-12-31',
            },
        ],
    };

    return (
        <>
            <button
                type="button"
                id="button-toggle-area-info"
                className={isActive ? null : 'on'}
                onClick={() => onShow(3)}
            >
                <Remix iconName={'arrow-right-s-line'} />
            </button>

            <aside id="panel-area-info" className={isActive ? 'on' : null}>
                <div className="area-picture-carousel">
                    <div className="picture-carousel-wrapper">
                        <img
                            src="/images/temp-image.jpg"
                            style={{ width: '100%', height: '100%' }}
                            alt=""
                        />
                    </div>

                    <button
                        type="button"
                        id="button-goto-community"
                        onClick={callSwalDemo}
                    >
                        <Remix iconName={'home-heart-fill'} />
                        <span>지역 커뮤니티 보기</span>
                    </button>
                </div>

                <dl className="area-descriptions">
                    <dt className="area-town-name">
                        <h4>{tempTown.townName}</h4>
                    </dt>

                    <dd className="area-city-province-name">
                        <Remix iconName={'map-pin-range-fill'} iconSize={0.6} />
                        <p>{tempTown.townCity}</p>
                        <span>·</span>
                        <p>{tempTown.townProvince}</p>
                    </dd>

                    <dd className="area-users">
                        <div className="user-icons-container">
                            {[1, 2, 3, 4, 5].reverse().map((item, index) => {
                                return (
                                    <div
                                        className="user-icon"
                                        style={{
                                            '--order': item,
                                            backgroundColor: `rgb(${randomColor()})`,
                                        }}
                                        key={index}
                                    >
                                        <img
                                            src="/src/assets/images/placeholder-paw.png"
                                            alt=""
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <p className="user-total-counter">
                            <span>
                                {tempTown.userTotal > 9999
                                    ? Number(9999).toLocaleString('ko-KR') + '+'
                                    : tempTown.userTotal.toLocaleString(
                                          'ko-KR',
                                      )}
                            </span>
                            <span>마리의 말랑이들이 있어요.</span>
                        </p>
                    </dd>
                </dl>

                <div>
                    <div className="area-section-title">
                        <Remix iconName={'chat-thread-fill'} />
                        <p>현재 지역에서 진행 중인 글타래</p>
                    </div>

                    <ul className="area-threads-list">
                        {tempTown.currentThreads.map((item, index) => {
                            return (
                                <AreaThreadArticle
                                    articleObject={item}
                                    key={index}
                                />
                            );
                        })}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default AreaInfoPanel;
