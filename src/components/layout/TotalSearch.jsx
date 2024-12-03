import { useState } from 'react';
import Remix from '../common/Remix';
import ModalSectionTitle from '../common/ModalSectionTitle';
import ThreadItem from '../common/ThreadItem';
import ArticleItem from '../common/ArticleItem';
import ReplyItem from '../common/ReplyItem';

const TotalSearch = ({ isActive, onShow }) => {
    const [searchResult, getSearchResult] = useState([]);

    if (isActive)
        return (
            <div
                id="total-search-backdrop"
                onKeyDown={(e) => {
                    if (e.key === 'Escape') onShow(0);
                }}
            >
                <div
                    className={`inner-wrapper ${searchResult.length > 0 && 'results'}`}
                >
                    <div className="total-search-input-container">
                        <input
                            type="text"
                            id="total-search-input"
                            className="exclude"
                            placeholder="검색어 입력..."
                        />

                        <button
                            type="button"
                            id="button-total-search"
                            onClick={() => getSearchResult([1])}
                        >
                            <Remix iconName={'search-2-line'} />
                        </button>

                        <div
                            className={`total-search-result-count ${searchResult.length > 0 && 'results'}`}
                        >
                            <p>
                                총 {searchResult.length.toLocaleString('ko-KR')}{' '}
                                건의 검색 결과가 있습니다.
                            </p>
                        </div>
                    </div>

                    <div id="total-search-result-list">
                        <ModalSectionTitle sectionTitle="글타래" />

                        <div className="search-result-list thread">
                            <ThreadItem isEditMode={false} />
                        </div>

                        <ModalSectionTitle sectionTitle="커뮤니티" />

                        <div className="search-result-list articles">
                            <ArticleItem />
                        </div>

                        <ModalSectionTitle sectionTitle="댓글" />

                        <div className="search-result-list replies">
                            <ReplyItem />
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default TotalSearch;
