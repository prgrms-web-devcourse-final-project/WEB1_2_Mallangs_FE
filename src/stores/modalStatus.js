import { create } from 'zustand';
import navObjectSetup from '../datas/modalNavObject.json'; // 모달 네비게이션 셋업

export const useModalStore = create((set) => ({
    // editMode: [ places, rescue, missing, other ]
    // threadType: [ profile, places, rescue, missing ]

    isModalShowing: false,
    modalStatus: {
        isThisMine: true,
        editMode: false,
        threadType: 'profile',
        threadUser: {
            userID: 0,
            userAccount: 'kim_4yongjar',
            userName: '김사용자',
            userImage: 'https://picsum.photos/128/128?random=2',
            userDescription: '어쩌고 저쩌고',
            isAuthenticated: false,
        },
        threadAnimal: {},
        modalData: {
            // 글타래 데이터 전달 방식
            latitude: 0.0,
            longtitude: 0.0,
            threadTitle: 'Zustand 상태값',
            mainCategory: '주 분류',
            subCategory1: '서브 분류 1',
            subCategory2: '서브 분류 2',
            subCategory3: '서브 분류 3',
            masterNavigations: navObjectSetup.profile.masterNavigations, // 중간의 profile 부분을 모달 상태에 맞춰 가지고 오면 됨
        },
    },
    toggleModal: (setValue) => set({ isModalShowing: setValue }),
    setModalType: (setValue) =>
        set((state) => ({
            // 모달 호출시 setValue 매개변수를 통해 모달 출력 형태를 변경한다. (상단의 threadType 참조)
            modalStatus: {
                ...state.modalStatus,
                threadType: setValue,
                modalData: {
                    ...state.modalStatus.modalData,
                    masterNavigations:
                        navObjectSetup[setValue].masterNavigations,
                },
            },
        })),
    setModalData: (setObject) =>
        set((state) => ({
            modalStatus: {
                ...state.modalStatus,
                modalData: {
                    ...state.modalStatus.modalData,
                    latitude: setObject.latitude,
                    longitude: setObject.longtitude,
                    threadTitle: setObject.threadTitle,
                    mainCategory: setObject.mainCategory,
                    subCategory1: setObject.subCategory1,
                    subCategory2: setObject.subCategory2,
                    subCategory3: setObject.subCategory3,
                },
            },
        })),
}));
