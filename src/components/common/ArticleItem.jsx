import Remix from './Remix';
import dateFormat from '../../utils/dateFormat';
import hourFormat from '../../utils/hourFormat';

const ArticleItem = () => {
    return (
        <article className="article-item">
            <div className="article-item-checkbox-wrapper">
                <input
                    type="checkbox"
                    name="check-something"
                    id={`chkArticleItem`}
                />

                <label htmlFor={`chkArticleItem`}>
                    <div className="toggles-indicator">
                        <Remix iconName={'check-line'} iconSize={0.6} />
                    </div>
                </label>
            </div>

            <dl className="article-item-descriptions">
                <dt className="article-item-title">
                    <span className="article-item-title-text">게시물 제목</span>

                    <span className="article-replies-counter">
                        [{Number(412415).toLocaleString('ko-KR')}]
                    </span>
                </dt>

                <dd className="article-item-category">
                    <span>게시판</span>

                    <span>·</span>

                    <span>카테고리</span>
                </dd>

                <dd className="article-item-datetime">
                    <span>{dateFormat('2024-01-01 16:46:45')}</span>

                    <span>·</span>

                    <span>{hourFormat('2024-01-01 16:36:45')}</span>
                </dd>
            </dl>
        </article>
    );
};

export default ArticleItem;
