import NameTag from '../components/common/NameTag';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import DataTableRow from '../components/common/DataTableRow';
import ModalInstruction from '../components/common/ModalInstruction';

const UserIgnoreList = () => {
    return (
        <div>
            <ModalSectionTitle sectionTitle="차단 유저 목록" />

            <div className="user-common-item-list">
                <ModalInstruction
                    instHeadline="차단한 유저와는 대화할 수 없어요."
                    instContent="차단을 해제하는 기능은 준비 중입니다."
                />
            </div>

            <div className="user-common-table">
                <DataTableRow
                    tableHeader={
                        <NameTag
                            userObject={{
                                userID: 0,
                                userImage:
                                    'https://picsum.photos/seed/111/64/64',
                                userName: '김길동',
                            }}
                        />
                    }
                >
                    <span>차단 사유 - 시끄러움</span>
                </DataTableRow>

                <DataTableRow
                    tableHeader={
                        <NameTag
                            userObject={{
                                userID: 0,
                                userImage:
                                    'https://picsum.photos/seed/222/64/64',
                                userName: '정발산',
                            }}
                        />
                    }
                >
                    <span>차단 사유 - 나한테 해외선물이라는 심한 욕을 함</span>
                </DataTableRow>

                <DataTableRow
                    tableHeader={
                        <NameTag
                            userObject={{
                                userID: 0,
                                userImage:
                                    'https://picsum.photos/seed/333/64/64',
                                userName: '박복례',
                            }}
                        />
                    }
                >
                    <span>차단 사유 - 우리 강아지 못생겼다고 함</span>
                </DataTableRow>

                <DataTableRow
                    tableHeader={
                        <NameTag
                            userObject={{
                                userID: 0,
                                userImage:
                                    'https://picsum.photos/seed/444/64/64',
                                userName: '최똔식',
                            }}
                        />
                    }
                >
                    <span>차단 사유 - 아는 사람임</span>
                </DataTableRow>
            </div>
        </div>
    );
};

export default UserIgnoreList;
