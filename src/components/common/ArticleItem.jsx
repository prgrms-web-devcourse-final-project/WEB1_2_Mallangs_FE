import Remix from './Remix';
import dateFormat from '../../utils/dateFormat';
import hourFormat from '../../utils/hourFormat';

const ArticleItem = ({
    index = 0,
    articleTitle = '제목 없음',
    repliesCount = 0,
    boardFrom = '게시판 없음',
    categoryFrom = '분류 없음',
    writtenDate = '1970-01-01',
    isEditMode = false,
}) => {
    return (
        <article className="article-item">
            {isEditMode && (
                <div className="article-item-checkbox-wrapper">
                    <input type="checkbox" id={`chkArticleItem${index}`} />

                    <label htmlFor={`chkArticleItem${index}`}>
                        <div className="toggles-indicator">
                            <Remix iconName={'check-line'} iconSize={0.6} />
                        </div>
                    </label>
                </div>
            )}

            <dl className="article-item-descriptions">
                <dt className="datetime-row article-item-title">
                    <span className="article-item-title-text">
                        {articleTitle}
                    </span>

                    <span className="article-replies-counter">
                        [{repliesCount.toLocaleString('ko-KR')}]
                    </span>
                </dt>

                <dd className="datetime-row article-item-category">
                    <p>{boardFrom}</p>

                    <span>·</span>

                    <p>{categoryFrom}</p>
                </dd>

                <dd className="datetime-row article-item-datetime">
                    <p>{dateFormat(writtenDate)}</p>

                    <span>·</span>

                    <p>{hourFormat(writtenDate)}</p>
                </dd>
            </dl>
        </article>
    );
};

export default ArticleItem;
