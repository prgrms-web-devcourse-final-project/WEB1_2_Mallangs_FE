import MallangItem from '../components/common/MallangItem';
import ModalSectionTitle from '../components/common/ModalSectionTitle';

const MallangProfile = () => {
    return (
        <>
            <ModalSectionTitle sectionTitle="대표 말랑이" />

            <div>
                <MallangItem
                    mallangObject={{
                        petImage: 'https://picsum.photos/128/128?random=2',
                        isMain: true,
                        petName: '김땅콩',
                        petType: '고양이',
                        petAge: 4,
                        petGender: '수컷',
                    }}
                />
            </div>

            <ModalSectionTitle sectionTitle="다른 말랑이들 말랑이" />

            <div>
                <MallangItem
                    mallangObject={{
                        petImage: 'https://picsum.photos/128/128?random=1',
                        isMain: false,
                        petName: '김별난',
                        petType: '고양이',
                        petAge: 2,
                        petGender: '수컷',
                    }}
                />

                <MallangItem
                    mallangObject={{
                        petImage: 'https://picsum.photos/128/128?random=3',
                        isMain: false,
                        petName: '김아몬드',
                        petType: '코끼리',
                        petAge: 64,
                        petGender: '암컷',
                    }}
                />

                <MallangItem
                    mallangObject={{
                        petImage: 'https://picsum.photos/128/128?random=4',
                        isMain: false,
                        petName: '김율무',
                        petType: '기린',
                        petAge: 21,
                        petGender: '수컷',
                    }}
                />
            </div>
        </>
    );
};

export default MallangProfile;
