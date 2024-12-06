import { useParams } from 'react-router-dom';

const ArticleDetailsPage = () => {
    const { categoryName, articleID } = useParams();

    return (
        <div className="inner-wrap">
            {categoryName} / {articleID} 글
        </div>
    );
};

export default ArticleDetailsPage;
