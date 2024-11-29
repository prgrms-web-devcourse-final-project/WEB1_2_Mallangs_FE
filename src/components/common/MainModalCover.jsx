import Remix from './Remix';
import DropdownSelector from './DropdownSelector';
import tempOptionList from '../../datas/temp-options-list.json'; // 임시 드롭다운 옵션 데이터

const MainModalCover = () => {
    return (
        <section id="main-modal-cover">
            <div className="cover-controls">
                <div className="cover-controls-author">
                    <DropdownSelector
                        optionList={tempOptionList}
                        onSelect={(data) =>
                            console.log('드롭다운에서 선택한 값:', data)
                        }
                    />

                    <button type="button" className="buttons">
                        <Remix iconName={'edit-box-line'} iconSize={0.6} />

                        <span>글타래 수정</span>
                    </button>

                    <button type="button" className="buttons">
                        <Remix iconName={'delete-bin-fill'} iconSize={0.6} />

                        <span>삭제</span>
                    </button>
                </div>

                <button type="button" id="button-close-modal">
                    <Remix iconName={'close-line'} />
                </button>
            </div>

            <div className="cover-descriptions-container">
                <dl className="cover-descriptions">
                    <dt className="thread-title-container">
                        <h5 className="thread-title">
                            <Remix
                                iconName={'shield-check-fill'}
                                iconSize={1}
                            />

                            <span className="thread-title-content">
                                글타래 제목
                            </span>
                        </h5>
                    </dt>

                    <dd className="thread-category-container">
                        <Remix iconName={'search-eye-line'} />
                        <span>분류 1</span>
                        <span>·</span>
                        <span>분류 2</span>
                        <span>·</span>
                        <span>분류 3</span>
                        <span>·</span>
                        <span>분류 4</span>
                    </dd>
                </dl>
            </div>
        </section>
    );
};

export default MainModalCover;
