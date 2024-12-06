import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getThreadList } from '../api/threadApi';

const CommunityPage = () => {
    const [currentData, setData] = useState({
        categoryName: 'freeboard',
        articleID: 1234,
        articleTitle: '이것이 글 제목임',
    });

    const { isPending, error, data } = useQuery({
        queryKey: [],
        queryFn: () => getThreadList(),
    });

    return (
        <div className="inner-wrapper">
            {isPending ? (
                <>로딩중...</>
            ) : error ? (
                <>오류: {error.message}</>
            ) : (
                <>
                    <Link
                        to={`${currentData.categoryName}/${currentData.articleID}`}
                    >
                        {currentData.articleTitle}
                    </Link>

                    {data &&
                        data.map((item, index) => {
                            return (
                                <div key={index}>
                                    [{item.id}] {item.threadType} /{' '}
                                    {item.threadTitle}
                                </div>
                            );
                        })}
                </>
            )}
        </div>
    );
};

export default CommunityPage;
