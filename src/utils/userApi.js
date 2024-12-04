import axios from 'axios';

export const loginApi = (userData) => {
    return axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/member/login`,
        userData,
        {
            headers: {
                'Content-Type': 'application/json',
                accept: '*/*',
            },
        },
    );
};
