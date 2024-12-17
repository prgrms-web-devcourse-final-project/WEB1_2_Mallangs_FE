import { useQuery } from '@tanstack/react-query';
import { getThreadList } from '../api/threadApi';

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
    return (
        <div className="full-wrapper">
            <aside id="board-sidebar-main" className="full-page-sidebar left">
                사이드바
            </aside>

            <div id="board-wrapper" className="inner-wrapper">
                asdf
            </div>

            <aside className="full-page-sidebar right">게시물 컨트롤러</aside>
        </div>
    );
};

export default CommunityPage;
