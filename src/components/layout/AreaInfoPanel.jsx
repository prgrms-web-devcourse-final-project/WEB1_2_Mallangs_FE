import Swal from 'sweetalert2';
import EmptyList from '../common/EmptyList';
import Remix from '../common/Remix';
import dateFormat from '../../utils/dateFormat';
import tempTown from '../../datas/temp-area-information.json'; // 임시 지역 데이터

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

    return (
        <>
            <button
                type="button"
                id="button-toggle-area-info"
                className={isActive ? null : 'on'}
                onClick={() => {
                    if (isActive ? onShow(0) : onShow(3));
                }}
            >
                <Remix iconName={'arrow-right-s-line'} iconSize={1.2} />
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

                    {/**
                    <button
                        type="button"
                        id="button-goto-community"
                        onClick={callSwalDemo}
                    >
                        <Remix iconName={'home-heart-fill'} />

                        <span>지역 커뮤니티 보기</span>
                    </button>
                     */}
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

                <div className="area-section-title">
                    <Remix iconName={'chat-thread-fill'} />

                    <p>현재 지역에서 진행 중인 글타래</p>
                </div>

                <ul className="area-threads-list">
                    {tempTown.currentThreads.length > 0 ? (
                        tempTown.currentThreads.map((item, index) => {
                            return (
                                <AreaThreadArticle
                                    articleObject={item}
                                    key={index}
                                />
                            );
                        })
                    ) : (
                        <EmptyList placeHolderText="아직 이 지역에서 작성된 글타래가 없어요. 첫 글타래를 작성해 보는 건 어떨까요?" />
                    )}
                </ul>
            </aside>
        </>
    );
};

export default AreaInfoPanel;
