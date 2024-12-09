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
