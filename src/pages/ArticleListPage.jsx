import { useParams } from 'react-router-dom';

const ArticleListPage = () => {
    const { categoryName } = useParams();

    return <div className="inner-wrapper">{categoryName}</div>;
};

export default ArticleListPage;
