import { useRef, useState } from 'react';
import axios from 'axios';
import Remix from '../common/Remix';
import ModalSectionTitle from '../common/ModalSectionTitle';
import ThreadItem from '../common/ThreadItem';
import ArticleItem from '../common/ArticleItem';
import ReplyItem from '../common/ReplyItem';
import logoImage from '../../assets/images/logo.png';

const TotalSearch = ({ currentPanel, setPanel }) => {
    const searchInput = useRef(null);
    const [searchResult, getSearchResult] = useState([]);

    const handleSearchAction = async () => {
        // 검색 핸들러
        if (!!searchInput.current.value === false) return;

        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts/',
            );

            getSearchResult([...response.data]);

            console.log(searchResult);
        } catch (error) {
            console.log(error);
        }
    };

    if (currentPanel === 'total-search') {
        // 마운팅시 추가 액션 필요
        return (
            <div
                id="total-search-backdrop"
                onKeyDown={(e) => {
                    if (e.key === 'Escape') setPanel(null);
                }}
            >
                <div
                    className={`inner-wrapper ${searchResult.length > 0 && 'results'}`}
                >
                    <div id="total-search-header">
                        <div className="search-logo">
                            <img src={logoImage} alt="말랑플레이스 로고" />
                        </div>

                        <h1>검색</h1>

                        <button
                            type="button"
                            id="button-close-total-search"
                            title="검색창 닫기"
                            onClick={() => setPanel(null)}
                        >
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div className="total-search-input-container">
                        <input
                            type="text"
                            id="total-search-input"
                            className="exclude"
                            placeholder="키워드를 입력하세요..."
                            ref={searchInput}
                            autoFocus
                            onKeyUp={(e) => {
                                if (e.key === 'Escape') setPanel(null);

                                if (e.key === 'Enter') handleSearchAction();
                            }}
                        />

                        <button
                            type="button"
                            id="button-total-search"
                            onClick={handleSearchAction}
                        >
                            <Remix iconName={'search-2-line'} />
                        </button>

                        <div
                            className={`total-search-result-count ${searchResult.length > 0 && 'results'}`}
                        >
                            <p>
                                {searchResult.length.toLocaleString('ko-KR')}
                                건의 검색 결과가 있어요.
                            </p>
                        </div>
                    </div>

                    <div id="total-search-result-list">
                        <ModalSectionTitle sectionTitle="글타래" />

                        <div className="search-result-list thread">
                            <p
                                style={{
                                    paddingBlock: '.8rem',
                                    fontSize: 'var(--fnt-sm)',
                                    textAlign: 'center',
                                    opacity: '.5',
                                }}
                            >
                                표시할 내용이 없어요.
                            </p>
                        </div>

                        <ModalSectionTitle sectionTitle="커뮤니티" />

                        <div className="search-result-list articles">
                            {searchResult.length > 0 ? (
                                searchResult.map((item, index) => {
                                    return (
                                        <ArticleItem
                                            index={index}
                                            articleTitle={item.title}
                                            key={index}
                                        />
                                    );
                                })
                            ) : (
                                <p
                                    style={{
                                        paddingBlock: '.8rem',
                                        fontSize: 'var(--fnt-sm)',
                                        textAlign: 'center',
                                        opacity: '.5',
                                    }}
                                >
                                    표시할 내용이 없어요.
                                </p>
                            )}
                        </div>

                        <ModalSectionTitle sectionTitle="댓글" />

                        <div className="search-result-list replies">
                            <p
                                style={{
                                    paddingBlock: '.8rem',
                                    fontSize: 'var(--fnt-sm)',
                                    textAlign: 'center',
                                    opacity: '.5',
                                }}
                            >
                                표시할 내용이 없어요.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default TotalSearch;
