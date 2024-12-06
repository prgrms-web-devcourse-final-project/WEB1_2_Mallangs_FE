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
        queryKey: ['repoData'],
        queryFn: () => getThreadList(),
    });

    if (isPending) return <>로딩중...</>;

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div className="inner-wrapper">
            <Link to={`${currentData.categoryName}/${currentData.articleID}`}>
                {currentData.articleTitle}
            </Link>

            {data &&
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            [{item.id}] {item.threadType} / {item.threadTitle}
                        </div>
                    );
                })}
        </div>
    );
};

export default CommunityPage;
