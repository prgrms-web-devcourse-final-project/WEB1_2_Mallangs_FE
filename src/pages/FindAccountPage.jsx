import { useNavigate } from 'react-router-dom';

const FindAccountPage = () => {
    const navigate = useNavigate();

    return (
        <section id="full-page-wrapper">
            <div className="service-container-wrapper">
                나는 이곳에서 나의 계정을 되찾을 것이오
                <button onClick={() => navigate(-1)}>돌아가기</button>
            </div>
        </section>
    );
};

export default FindAccountPage;
