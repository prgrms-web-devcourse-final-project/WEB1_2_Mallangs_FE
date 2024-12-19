const FindResult = ({ email, userId, isSuccess, activeTab }) => {
    return (
        <div className="find-result">
            <div className="find-result-top-group">
                <span className="check-result-text">
                    {activeTab === 'findId' ? '아이디 확인' : '비밀번호 확인'}
                </span>
                <span className="find-result-notification-text">
                    {activeTab === 'findId'
                        ? '입력하신 정보와 일치하는 아이디는 다음과 같습니다.'
                        : isSuccess
                          ? '임시 비밀번호를 이메일로 전송했습니다. 이메일을 못 받으셨다면 스팸 메일함을 확인해주세요!'
                          : '입력하신 정보와 일치하는 계정을 찾을 수 없습니다. 다시 확인하고 시도해주세요.'}
                </span>
            </div>

            <div className="find-result-wrapper">
                {isSuccess ? (
                    <div className="find-result-wrapper-section">
                        {activeTab === 'findId' ? (
                            <div className="find-result-wrapper-bottom-group1">
                                <span className="split-text1">
                                    고객님의 아이디는{' '}
                                </span>
                                <span className="found-info-text">
                                    {userId}
                                </span>
                                <span className="split-text2">입니다.</span>
                            </div>
                        ) : (
                            <div className="find-result-wrapper-bottom-group1">
                                <div className="find-result-wrapper-bottom-group2">
                                    <span className="split-text1">
                                        전송된 이메일은{' '}
                                    </span>
                                    <span className="found-info-text">
                                        {email}
                                    </span>
                                    <span className="split-text2">입니다.</span>
                                </div>
                                <p>
                                    아래 버튼을 클릭하면 메인 페이지로
                                    이동합니다.
                                </p>
                            </div>
                        )}
                        <button
                            className="main-redirect-button"
                            onClick={() => (window.location.href = '/')}
                        >
                            <span id="main-redirect">메인으로</span>
                        </button>
                    </div>
                ) : (
                    <div className="find-result-wrapper-section">
                        <span className="not-found-text">
                            {activeTab === 'findId'
                                ? '입력하신 정보와 일치하는 아이디를 찾을 수 없습니다. 다시 확인하고 시도해주세요.'
                                : '입력하신 정보와 일치하는 계정을 찾을 수 없습니다. 다시 확인하고 시도해주세요.'}
                        </span>
                        <p>아래 버튼을 클릭하면 메인 페이지로 이동합니다.</p>
                        <button
                            className="main-redirect-button"
                            onClick={() => (window.location.href = '/')}
                        >
                            <span id="main-redirect">메인으로</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FindResult;
