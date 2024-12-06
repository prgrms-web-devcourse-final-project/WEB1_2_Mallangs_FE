import { useParams } from 'react-router-dom';

const ArticleDetailsPage = () => {
    const { categoryName, articleID } = useParams();

    return (
        <div className="inner-wrapper">
            {categoryName} / {articleID} 글
        </div>
    );
};

export default ArticleDetailsPage;
