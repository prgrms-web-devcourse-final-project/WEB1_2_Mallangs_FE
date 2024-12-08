import { create } from 'zustand';
import navObjectSetup from '../datas/modalNavObject.json'; // 모달 네비게이션 셋업
import dateFormat from '../utils/dateFormat';
import hourFormat from '../utils/hourFormat';

export const useModalStore = create((set) => ({
    // threadType: [ profile, places, rescue, missing ]

    isModalShowing: false,
    modalStatus: {
        isAuthenticated: false,
        isThisMine: false,
        isEditMode: false,
        masterNavigations: navObjectSetup.profile.masterNavigations,
    },
    modalData: {
        // 글타래 진짜 데이터 형식
        id: 0,
        threadType: 'profile',
        threadTitle: '글타래 제목',
        threadCoverImage: 'https://picsum.photos/640/480',
        threadAliveRange: {
            isExpiring: true,
            begin: '2024-01-01',
            ends: '2024-12-31',
        },
        latitude: 30.0,
        longitude: 128.0,
        address1: '',
        address2: '',
        threadSubjects: {
            mainSubject: '주 분류',
            subjectAlpha: '서브 분류 1',
            subjectBeta: '서브 분류 2',
            subjectGamma: '서브 분류 3',
        },
        threadAuthor: {
            userID: 0,
        },
        relatedPet: {
            petID: 0,
            petName: '김땅콩',
            petType: '고양이',
            petAge: 4,
            petGender: 'M',
            isNeutered: false,
            isGotChip: true,
            chipNumber: '000000000000',
        },
        threadImages: [
            {
                imageID: 0,
                imageURL: 'https://picsum.photos/640/480',
                originName: 'image',
                originFileType: 'jpg',
                imageWidth: 640,
                imageHeight: 480,
                fileSize: 204817275,
            },
        ],
        threadContent: '어쩌고 저쩌고',
        threadReplies: [0, 1, 2],
        placeInfo: {
            placeDescription: '시설 / 업체 소개 글',
            whatThisPlaceDoes: '시설 / 업체 제공 서비스',
            dayOff: {
                offType: 'weekly',
                offDescription: '매주 수요일',
            },
            workTime: {
                weekDays: { workBegin: '09:00', workEnds: '18:00' },
                weekEnds: { workBegin: '09:00', workEnds: '18:00' },
                breakTime: { workBegin: '09:00', workEnds: '18:00' },
            },
            placeContact: '010-5555-5555',
            placeURL: 'https://www.naver.com',
            placeReviews: {
                reviewID: [0, 1, 2],
                totalPointsEarned: 14,
            },
        },
        missingInfo: {
            missingAt: '2024-01-01 08:00',
            petSpecifics: '설명 없음',
            findingReward: '200000',
            rewardMethod: '현금으로 사례',
            contact: {
                phone: '010-1111-1111',
                timeRange: '12:00 ~ 22:00 사이',
            },
        },
        rescueInfo: {
            animalType: 'dragon',
            foundAt: '2024-01-01 08:00',
            foundSituation: '그냥 자빠라져있었슴 ㅇㅇ',
        },
        createdAt: '2024-01-01 20:30',
        modifiedAt: '2024-01-01 20:31',
    },
    toggleModal: (setValue) => set({ isModalShowing: setValue }),
    setEditMode: (setValue) =>
        set((state) => ({
            modalStatus: {
                ...state.modalStatus,
                isEditMode: setValue,
            },
            modalData: {
                ...state.modalData,
                threadTitle: '글타래 제목',
                threadSubjects: {
                    mainSubject: '주 분류',
                    subjectAlpha: '서브 분류 1',
                    subjectBeta: '서브 분류 2',
                    subjectGamma: '서브 분류 3',
                },
            },
        })),
    setModalType: (setValue) =>
        set((state) => ({
            modalStatus: {
                ...state.modalStatus,
                masterNavigations: navObjectSetup[setValue].masterNavigations,
            },
            modalData: {
                ...state.modalData,
                threadType: setValue,
            },
        })),
    setProfileData: (setObject) =>
        set((state) => ({
            modalData: {
                ...state.modalData,
                threadTitle: setObject.userName,
                threadSubjects: {
                    mainSubject:
                        setObject.pets.length > 0
                            ? `${setObject.pets.length}마리의 말랑이와 같이 살아요. ❤️`
                            : '아직은 말랑이가 없어요. 😹',
                    subjectAlpha: null,
                    subjectBeta: null,
                    subjectGamma: null,
                },
            },
        })),
    setPlaceData: (setObject) =>
        set((state) => ({
            modalData: {
                ...state.modalData,
                threadTitle: setObject.placeName,
                threadSubjects: {
                    mainSubject: setObject.mainCategory,
                    subjectAlpha: setObject.subCategoryAlpha,
                    subjectBeta: setObject.subCategoryBeta,
                    subjectGamma: setObject.subCategoryGamma,
                },
                placeInfo: {
                    placeDescription: '시설 / 업체 소개 글',
                    whatThisPlaceDoes: '시설 / 업체 제공 서비스',
                    dayOff: {
                        offType: 'weekly',
                        offDescription: '매주 수요일',
                    },
                    workTime: {
                        weekDays: { workBegin: '09:00', workEnds: '18:00' },
                        weekEnds: { workBegin: '09:00', workEnds: '18:00' },
                        breakTime: { workBegin: '09:00', workEnds: '18:00' },
                    },
                    placeContact: '010-5555-5555',
                    placeURL: 'https://www.naver.com',
                    placeReviews: {
                        reviewID: [0, 1, 2],
                        totalPointsEarned: 14,
                    },
                },
            },
        })),
    setMissingData: (setObject) =>
        set((state) => ({
            modalData: {
                ...state.modalData,
                threadTitle: setObject.threadTitle,
                threadSubjects: {
                    mainSubject: setObject.relatedPet.petName,
                    subjectAlpha: setObject.relatedPet.petType,
                    subjectBeta: setObject.relatedPet.petAge + '세',
                    subjectGamma: setObject.relatedPet.isGotChip
                        ? '인식 칩 있음'
                        : '칩 없음',
                },
                missingInfo: {
                    missingAt: '2024-01-01 08:00',
                    petSpecifics: '설명 없음',
                    findingReward: '200000',
                    rewardMethod: '현금으로 사례',
                    contact: {
                        phone: '010-1111-1111',
                        timeRange: '12:00 ~ 22:00 사이',
                    },
                },
            },
        })),
    setRescueData: (setObject) =>
        set((state) => ({
            modalData: {
                ...state.modalData,
                threadTitle: setObject.threadTitle,
                threadSubjects: {
                    mainSubject: setObject.rescueInfo.animalType,
                    subjectAlpha: dateFormat(setObject.rescueInfo.foundAt),
                    subjectBeta:
                        hourFormat(setObject.rescueInfo.foundAt) + ' 경',
                    subjectGamma:
                        setObject.threadStatus === 'on-board'
                            ? '구조 대기 중'
                            : '완료',
                },
                rescueInfo: {
                    animalType: 'dragon',
                    foundAt: '2024-01-01 08:00',
                    foundSituation: '그냥 자빠라져있었슴 ㅇㅇ',
                },
            },
        })),
}));
