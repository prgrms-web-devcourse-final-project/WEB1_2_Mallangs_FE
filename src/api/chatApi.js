import axiosInstance from './axios';

// 채팅방 생성
export const createChatRoom = async (memberId) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: `/chat-room/${memberId}`,
        });
        console.log('새로 생성된 채팅방:', response.data);
        return response.data;
    } catch (e) {
        console.error('createChatRoom API 에러:', e);
        throw e;
    }
};

// 나와 채팅중인 모든 채팅방 조회
export const loadMine = async () => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: `/chat-room`,
        });
        console.log('내 채팅방 목록:', response.data);
        return response.data;
    } catch (error) {
        console.error('loadMine API 에러:', error);
        throw error;
    }
};

// 다른 사용자와의 채팅방 조회
export const loadThem = async (profileMemberId) => {
    try {
        const response = await axiosInstance({
            method: 'get',
            url: `/chat-room/${profileMemberId}`,
        });
        console.log('상대방과의 채팅방:', response.data);
        return response.data[0];
    } catch (error) {
        console.error('loadThem API 에러:', error);
        throw error;
    }
};

// 채팅 메시지 조회
export const loadMessages = async (chatRoomId, page, size) => {
    try {
        console.log('=== 채팅 메시지 조회 API 호출 시작 ===');
        console.log('요청 파라미터:', {
            chatRoomId: chatRoomId,
            page: page,
            size: size,
        });

        const response = await axiosInstance({
            method: 'get',
            url: `/chat`,
            params: {
                chatRoomId: chatRoomId,
                page: page,
                size: size,
            },
        });

        console.log('API 응답:', response);
        console.log('=== 채팅 메시지 조회 API 호출 완료 ===');

        return response.data;
    } catch (error) {
        console.error('=== 채팅 메시지 조회 API 에러 ===');
        console.error('에러 정보:', error);
        if (error.response) {
            console.error('응답 상태:', error.response.status);
            console.error('응답 데이터:', error.response.data);
        }
        throw error;
    }
};
