import { useQuery } from '@tanstack/react-query';

import dateFormat from '../utils/dateFormat';

import { getThreadList } from '../api/threadApi';
import { Link } from 'react-router-dom';

const QueryExample = () => {
    // 비동기 query 예제
    const { isPending, error, data } = useQuery({
        queryKey: [],
        queryFn: () => getThreadList(),
    });

    return isPending ? (
        <>로딩중...</>
    ) : error ? (
        <>오류: {error.message}</>
    ) : (
        <>
            {data &&
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            [{item.id}] {item.threadType} / {item.threadTitle}
                        </div>
                    );
                })}
        </>
    );
};

const CommunityPage = () => {
    const tempData = [
        {
            id: 1,
            category: '카테고리',
            title: '이제와 뒤늦게 무엇을 더 보태려 하나',
            thumbnail: 'https://picsum.photos/120/90?random=1',
            replies: 1,
            createdAt: '2024-01-01',
        },
        {
            id: 2,
            category: '카테고리',
            title: '귀 기울여 듣지 않고 달리 보면 그만인 것을을',
            thumbnail: 'https://picsum.photos/120/90?random=2',
            replies: 3,
            createdAt: '2024-01-01',
        },
        {
            id: 3,
            category: '카테고리',
            title: '못 그린 내 빈 곳 무엇으로 채워지려나',
            thumbnail: 'https://picsum.photos/120/90?random=3',
            replies: 0,
            createdAt: '2024-01-01',
        },
        {
            id: 4,
            category: '카테고리',
            title: '차라리 내 마음에 비친 내 모습 그려 가리',
            thumbnail: 'https://picsum.photos/120/90?random=4',
            replies: 17,
            createdAt: '2024-01-01',
        },
    ];

    return (
        <div className="full-wrapper">
            <aside id="board-sidebar-main" className="full-page-sidebar left">
                <div id="board-search-filter">검색 필터</div>
            </aside>

            <div id="board-wrapper" className="inner-wrapper">
                <div id="board-list-summary">
                    <p>몇개</p>
                </div>

                <ul id="board-item-list">
                    {tempData.map((item, index) => {
                        return (
                            <li className="board-item" key={index}>
                                <Link to={`/community/${item.id}`}>
                                    <div className="board-item-image-container">
                                        {item.thumbnail && (
                                            <img
                                                className="board-item-image"
                                                src={item.thumbnail}
                                                alt=""
                                            />
                                        )}
                                    </div>

                                    <dl className="board-item-body">
                                        <dt className="board-item-title-container">
                                            <p className="board-item-title-content">
                                                {item.title}
                                            </p>

                                            <p className="board-item-reply-counter">
                                                [{item.replies}]
                                            </p>
                                        </dt>

                                        <dd className="board-item-info-container datetime-row">
                                            <span>{item.category}</span>

                                            <span>·</span>

                                            <span>
                                                {dateFormat(item.createdAt)}
                                            </span>

                                            <span>·</span>

                                            <span>작성자</span>
                                        </dd>
                                    </dl>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div>ajwrgpoajrgp</div>
            </div>

            <aside className="full-page-sidebar right">게시물 컨트롤러</aside>
        </div>
    );
};

export default CommunityPage;
