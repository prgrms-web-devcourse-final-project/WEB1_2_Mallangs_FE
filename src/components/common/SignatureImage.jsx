const SignatureImage = ({ signMode = 'profile', existData }) => {
    return (
        <div className="cover-signature-image-container">
            <div id="main-modal-signature-image">
                {signMode === 'edit' ? (
                    <div className="signature-image-wrapper">
                        허ㅐㅔㅁㅈ거헤ㅐㄱ덤햐ㅐㅔㅓㅁㄷ걓
                    </div>
                ) : signMode === 'places' ? (
                    <div className="signature-image-wrapper"></div>
                ) : signMode === 'profile' ? (
                    <div className="signature-image-wrapper"></div>
                ) : (
                    <div className="signature-image-wrapper"></div>
                )}
            </div>
        </div>
    );
};

export default SignatureImage;
