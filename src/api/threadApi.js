import axios from 'axios';

const baseURL = import.meta.env.VITE_API_MOCK_URL;

export const getThreadList = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}/threads`,
            withCredentials: true,
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
