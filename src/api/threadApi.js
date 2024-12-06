import axios from 'axios';

export const getThreadList = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: 'https://my-json-server.typicode.com/SoRaang/Mock-JSON-Server/users',
        });

        return response.data;
    } catch (error) {
        console.log(error);
    }
};
