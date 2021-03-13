import axios from 'axios';

// const baseURL = "https://pdfeditor-service.herokuapp.com";

const baseURL = 'http://localhost:5000';

const instance = axios.create({
    baseURL
});

const createAxiosResponseInterceptor = () => {
    const interceptor = instance.interceptors.response.use(
        response => response,
        errorRes => {
            // Reject promise if usual error
            if (!(errorRes.response.data.error.status === 401 && errorRes.response.data.error.message === "Token Expired")) {
                return Promise.reject(error);
            }

            instance.interceptors.response.eject(interceptor);

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            };

            return instance.post('/auth/generate-token', {}, config).then(() => {
                return Promise.resolve();
            }).catch(error => {
                return Promise.reject(error);
            }).finally(createAxiosResponseInterceptor);
        }
    );
}

createAxiosResponseInterceptor();

export default instance;