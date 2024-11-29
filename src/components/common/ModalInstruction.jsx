const ModalInstruction = ({
    instEmoji = '🚨',
    instHeadline = '인스트럭션 강조 대상',
    instContent = '인스트럭션 텍스트',
}) => {
    return (
        <section className="main-modal-instruction">
            <p>
                <span className="instruction-emoji">{instEmoji}</span>

                <span className="instruction-headline">{instHeadline}</span>

                <span className="instruction-content">{instContent}</span>
            </p>
        </section>
    );
};

export default ModalInstruction;
