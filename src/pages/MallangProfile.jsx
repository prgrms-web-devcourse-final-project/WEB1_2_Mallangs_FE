import ModalSectionTitle from '../components/common/ModalSectionTitle';
import MallangItem from '../components/common/MallangItem';
import tempDB from '../datas/temp-db.json';

const MallangProfile = () => {
    const currentUser = tempDB.users.find((user) => user.id === 0);

    return (
        <>
            {currentUser.pets.map((pet, index) => {
                return pet.isMain ? (
                    <div key={index}>
                        <ModalSectionTitle sectionTitle="대표 말랑이" />

                        <MallangItem mallangObject={pet} />

                        <ModalSectionTitle sectionTitle="다른 말랑이들" />
                    </div>
                ) : (
                    <MallangItem mallangObject={pet} key={index} />
                );
            })}
        </>
    );
};

export default MallangProfile;
