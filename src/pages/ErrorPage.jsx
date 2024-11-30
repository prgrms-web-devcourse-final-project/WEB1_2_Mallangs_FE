import { useNavigate } from 'react-router-dom';

const ErrorPage = ({
    errorCode = 404,
    errorMessage = '페이지를 찾을 수 없어요.',
}) => {
    const navigate = useNavigate();

    return (
        <section id="full-page-wrapper">
            <div className="service-container-wrapper">
                <h1
                    style={{
                        fontFamily: 'var(--ff-dingbat)',
                        fontSize: 'var(--fnt-title-xl)',
                    }}
                >
                    {errorCode} ♤ ♧ † £ ¢
                </h1>

                <p>{errorMessage}</p>

                <button onClick={() => navigate(-1)}>돌아가기</button>
            </div>
        </section>
    );
};

export default ErrorPage;
