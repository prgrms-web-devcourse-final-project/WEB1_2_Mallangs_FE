import axiosInstance from './axios';

// 로그인
export const loginApi = async (userData) => {
    const response = await axiosInstance.post('/member/login', userData);

    if (response.headers?.authorization) {
        const token = response.headers.authorization.replace('Bearer ', '');
        localStorage.setItem('accessToken', token);
    }
    return response;
};

// 로그아웃
export const logoutApi = async () => {
    const response = await axiosInstance.post('/member/logout');
    localStorage.clear();
    return response;
};
