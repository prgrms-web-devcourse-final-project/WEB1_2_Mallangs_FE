import { useNavigate } from 'react-router-dom';

const ErrorPage = ({
    errorCode = 404,
    errorMessage = '페이지를 찾을 수 없어요.',
}) => {
    const navigate = useNavigate();

    return (
        <section id="full-page-wrapper">
            <div className="service-container-wrapper">
                <div id="error-message-container">
                    <h1>¢ {errorCode} ♧</h1>

                    <p>{errorMessage}</p>

                    <button onClick={() => navigate(-1)}>돌아가기</button>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
