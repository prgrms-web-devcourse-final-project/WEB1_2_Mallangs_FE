import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CommunityPage = () => {
    const [currentData, setData] = useState({
        categoryName: 'freeboard',
        articleID: 1234,
        articleTitle: '이것이 글 제목임',
    });

    return (
        <div className="inner-wrapper">
            <Link to={`${currentData.categoryName} / ${currentData.articleID}`}>
                {currentData.articleTitle}
            </Link>
        </div>
    );
};

export default CommunityPage;
