import { useState } from 'react';
import { findPassword } from '../api/userApi';

const FindPw = () => {
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleFindPassword = async (e) => {
        e.preventDefault();
        try {
            await findPassword(email, userId);
            setIsSuccess(true);
            setError(null);
        } catch (err) {
            setIsSuccess(false);
            setError('입력한 아이디와 일치하는 정보가 없습니다.');
        }
    };

    return (
        <div>
            <h4>임시로 맹든 비밀번호 찾기</h4>
            <form onSubmit={handleFindPassword}>
                <input
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="아이디"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
                <button type="submit">비밀번호 찾기</button>
            </form>
            {isSuccess && (
                <div>입력하신 이메일로 임시비밀번호를 보냈습니다!</div>
            )}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default FindPw;
