import { useState } from 'react';
import { findId, findPassword } from '../api/userApi';
import FindResult from './FindResult';

const FindMyIdAndPassword = () => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('findId');
    const [showResult, setShowResult] = useState(false); // 결과 화면 표시 여부

    const handleFindPassword = async () => {
        try {
            await findPassword(email, userId);
            setIsSuccess(true);
            setError(null);
            setShowResult(true);
        } catch (error) {
            setIsSuccess(false);
            setError('입력한 아이디 혹은 이메일과 일치하는 정보가 없습니다.');
            setShowResult(true);
        }
    };

    const handleFindId = async () => {
        try {
            const result = await findId(email, nickname);
            setUserId(result);
            setIsSuccess(true);
            setError(null);
            setShowResult(true);
        } catch (error) {
            setUserId('');
            setIsSuccess(false);
            setError('입력한 이메일 혹은 닉네임과 일치하는 정보가 없습니다.');
            setShowResult(true);
        }
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setError(null);
        setIsSuccess(false);
        setUserId('');
        setShowResult(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (activeTab === 'findId') {
            handleFindId();
        } else {
            handleFindPassword();
        }
    };

    return (
        <div className="tab-menu">
            {!showResult ? (
                <>
                    <div className="tabs">
                        <div
                            className={`tab ${activeTab === 'findId' ? 'active' : ''}`}
                            onClick={() => handleTabClick('findId')}
                        >
                            아이디 찾기
                        </div>
                        <div
                            className={`tab ${activeTab === 'findPassword' ? 'active' : ''}`}
                            onClick={() => handleTabClick('findPassword')}
                        >
                            비밀번호 찾기
                        </div>
                    </div>
                    <div className="form">
                        {activeTab === 'findId' ? (
                            <>
                                <div className="form-group">
                                    <label htmlFor="nickname">닉네임</label>
                                    <input
                                        id="nickname"
                                        className="input-first"
                                        type="text"
                                        placeholder="닉네임을 입력하세요"
                                        value={nickname}
                                        onChange={(e) =>
                                            setNickname(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">이메일</label>
                                    <input
                                        id="email"
                                        className="input-second"
                                        type="email"
                                        placeholder="이메일을 입력하세요"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="form-group">
                                    <label htmlFor="userId">아이디</label>
                                    <input
                                        id="userId"
                                        className="input-first"
                                        type="text"
                                        placeholder="아이디를 입력하세요"
                                        value={userId}
                                        onChange={(e) =>
                                            setUserId(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">이메일</label>
                                    <input
                                        id="email"
                                        className="input-second"
                                        type="email"
                                        placeholder="이메일을 입력하세요"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                            </>
                        )}
                        <button
                            className="submit-button"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            {activeTab === 'findId'
                                ? '아이디 찾기'
                                : '비밀번호 찾기'}
                        </button>
                    </div>
                </>
            ) : (
                <FindResult
                    email={email}
                    userId={userId}
                    isSuccess={isSuccess}
                    activeTab={activeTab}
                />
            )}
        </div>
    );
};

export default FindMyIdAndPassword;
