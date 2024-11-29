const ModalInstruction = () => {
    return (
        <section className="main-modal-instruction">
            <p>
                <span className="instruction-emoji">{'🚨'}</span>

                <span className="instruction-headline">
                    {'인스트럭션 강조 대상'}
                </span>

                <span className="instruction-content">
                    {'인스트럭션 텍스트'}
                </span>
            </p>
        </section>
    );
};

export default ModalInstruction;
