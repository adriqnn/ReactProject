import { requestFactory } from './requesterService';

const baseUrl = 'http://localhost:3000';

export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        login: (loginData) => request.post(`${baseUrl}/auth/login`, loginData),
        register: (registerData) => request.post(`${baseUrl}/auth/register`, registerData),
        logout: () => request.get(`${baseUrl}/auth/logout`),
        profile: (id) => request.get(`${baseUrl}/profile/${id}`)
    };
};