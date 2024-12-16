import { useQuery } from '@tanstack/react-query';
import Remix from '../common/Remix';
import EmptyList from '../common/EmptyList';
import dateFormat from '../../utils/dateFormat';
import { getThreadList } from '../../api/threadApi';
import tempTown from '../../datas/temp-area-information.json'; // 임시 지역 데이터

const AreaThreadArticle = ({ articleObject }) => {
    // 지역 글타래 미리보기 아이템 (내장 컴포넌트)
    return (
        <li className="area-thread-item">
            <div className="area-thread-item-image-wrapper">
                {articleObject.threadImages.length > 0 ? (
                    <img
                        src={
                            articleObject.threadImages[0].imageSrc ||
                            'https://picsum.photos/96/96'
                        }
                        alt="글타래 이미지 미리보기"
                    />
                ) : (
                    <div></div>
                )}
            </div>

            <dl className="area-thread-item-descriptions">
                <dt className="area-thread-item-title">
                    {articleObject.threadTitle}
                </dt>

                <dd className="area-thread-item-daterange">
                    <span>
                        {dateFormat(articleObject.threadAliveRange.begin)}
                    </span>
                    ~
                    <span>
                        {dateFormat(articleObject.threadAliveRange.ends)}
                    </span>
                </dd>
            </dl>
        </li>
    );
};

const AreaInfoPanel = ({ isAreaInfoShowing, setPanel, currentLocation }) => {
    const randomColor = () => {
        // 사용자 아이콘 배경에 랜덤 색상 부여
        let R = Math.floor(Math.random() * 205 + 50);
        let G = Math.floor(Math.random() * 205 + 50);
        let B = Math.floor(Math.random() * 205 + 50);
        return `${R} ${G} ${B}`;
    };

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => getThreadList(),
    });

    return (
        <>
            <button
                type="button"
                id="button-toggle-area-info"
                className={isAreaInfoShowing ? undefined : 'on'}
                onClick={() => {
                    if (isAreaInfoShowing) {
                        setPanel(false);
                    } else {
                        setPanel(true);
                    }
                }}
            >
                <Remix iconName={'arrow-right-s-line'} iconSize={1.2} />
            </button>

            <aside
                id="panel-area-info"
                className={isAreaInfoShowing ? 'on' : undefined}
            >
                <div className="area-picture-carousel">
                    <div className="picture-carousel-wrapper">
                        <img
                            src="/images/temp-image.jpg"
                            style={{ width: '100%', height: '100%' }}
                            alt=""
                        />
                    </div>
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
                    {isPending ? (
                        <>로딩중...</>
                    ) : data ? (
                        data.map((item, index) => {
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
