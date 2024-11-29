import Remix from './Remix';

const SearchUserLocation = () => {
    return (
        <div className="search-container">
            <div className="search-input-container">
                <div className="text-input">
                    <input
                        placeholder="동, 읍, 면 이름으로 검색"
                        className="input"
                    />
                    {/* <span className="text-input-placeholder">
                        동, 읍, 면 이름으로 검색
                    </span> */}
                </div>
                <button className="button-search-keyword">
                    <span className="button-label">검색</span>
                </button>
                <button className="button-search-location">
                    <div className="icon-focus">
                        <Remix iconName={'focus-3-line'} />
                    </div>
                    <span className="button-label">현재 위치로 검색</span>
                </button>
            </div>
            <div className="search-result-list">
                <div className="search-result-row">
                    <div className="search-result-titlebar">
                        <div className="button-set-my-town">
                            <div className="icon-home">
                                <Remix iconName={'home-4-line'} />
                            </div>
                        </div>
                        <span className="town-name">무슨동</span>
                    </div>
                    <span className="city-province">무슨시 무슨구</span>
                </div>
                <div className="block-separator" />
                <div className="search-result-row">
                    <div className="search-result-titlebar">
                        <div className="button-set-my-town">
                            <div className="icon-home">
                                <Remix iconName={'home-4-line'} />
                            </div>
                        </div>
                        <span className="town-name">머선동</span>
                    </div>
                    <span className="city-province">무슨시 무슨구</span>
                </div>
                <div className="block-separator" />
                <div className="search-result-row">
                    <div className="search-result-titlebar">
                        <div className="button-set-my-town">
                            <div className="icon-home">
                                <Remix iconName={'home-4-line'} />
                            </div>
                        </div>
                        <span className="town-name">금은동</span>
                    </div>
                    <span className="city-province">무슨시 무슨구</span>
                </div>
                <div className="block-separator" />
                <div className="search-result-row">
                    <div className="search-result-titlebar">
                        <div className="button-set-my-town">
                            <div className="icon-home">
                                <Remix iconName={'home-4-line'} />
                            </div>
                        </div>
                        <span className="town-name">카츠동</span>
                    </div>
                    <span className="city-province">무슨시 무슨구</span>
                </div>
                <div className="block-separator" />
                <div className="search-result-row">
                    <div className="search-result-titlebar">
                        <div className="button-set-my-town">
                            <div className="icon-home">
                                <Remix iconName={'home-4-line'} />
                            </div>
                        </div>
                        <span className="town-name">카이센동</span>
                    </div>
                    <span className="city-province">무슨시 무슨구</span>
                </div>
            </div>
        </div>
    );
};

export default SearchUserLocation;
