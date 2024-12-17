import { useState } from 'react';
import { findId } from '../api/userApi';

const FindId = () => {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [foundUserId, setFoundUserId] = useState(null);
    const [error, setError] = useState(null);

    const handleFindUserId = async (e) => {
        e.preventDefault();
        try {
            const userId = await findId(email, nickname);
            setFoundUserId(userId);
            setError(null);
        } catch (err) {
            setFoundUserId(null);
            setError('사용자를 찾을 수 없습니다.');
        }
    };

    console.log(foundUserId);

    return (
        <div>
            <h4>임시로 맹든 아이디 찾기</h4>
            <form onSubmit={handleFindUserId}>
                <input
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="닉네임"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    required
                />
                <button type="submit">아이디 찾기</button>
            </form>
            {foundUserId && <div>찾은 아이디: {foundUserId}</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default FindId;
