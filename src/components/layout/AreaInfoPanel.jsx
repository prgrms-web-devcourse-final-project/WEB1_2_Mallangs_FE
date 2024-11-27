import Remix from '../common/Remix';

const AreaInfoPanel = () => {
    const tempTown = {
        // 임시 지역 데이터
        townCity: '부산광역시',
        townProvince: '부산진구',
        townName: '연지동',
        userTotal: 2412474,
    };

    return (
        <aside id="panel-area-info">
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
                    onClick={() => console.log(1)}
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
                                    style={{ '--order': item }}
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
                                : tempTown.userTotal.toLocaleString('ko-KR')}
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
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                        return (
                            <li key={index}>실종된 아이를 찾아요. ({item})</li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default AreaInfoPanel;
