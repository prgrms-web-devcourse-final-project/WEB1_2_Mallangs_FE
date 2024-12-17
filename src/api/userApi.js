import axiosInstance from './axios';

// 로그인
export const loginApi = async (userData) => {
    try {
        const response = await axiosInstance.post('/member/login', userData);

        if (response.headers?.authorization) {
            const token = response.headers.authorization.replace('Bearer ', '');
            localStorage.setItem('accessToken', token);
        }
        return response.data;
    } catch (error) {
        console.error('로그인 에러:', error);
        throw error;
    }
};

// 로그아웃
export const logoutApi = async () => {
    try {
        const response = await axiosInstance.post('/member/logout');
        localStorage.removeItem('accessToken');
        return response.data;
    } catch (error) {
        console.error('로그아웃 에러:', error);
        throw error;
    }
};

// 아이디 찾기
export const findId = async (email, nickname) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/member/find-user-id',
            data: { email, nickname },
        });
        console.log('전체 응답:', response);
        console.log('응답 데이터:', response.data);
        return response.data;
    } catch (e) {
        console.error('아이디 찾기 실패!!', e);
        throw e;
    }
};

// 비밀번호 찾기
export const findPassword = async (email, userId, title) => {
    try {
        const response = await axiosInstance({
            method: 'post',
            url: '/member/find-password',
            data: { email, userId, title },
        });
        console.log('응답 데이터:', response.data);
        return response.data;
    } catch (e) {
        console.error('비밀번호 찾기 실패!!', e);
        throw e;
    }
};
