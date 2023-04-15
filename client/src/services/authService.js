import { requestFactory } from './requesterService';

const baseUrl = 'http://localhost:3030';

export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        login: (loginData) => request.post(`${baseUrl}/auth/login`, loginData),
        register: (registerData) => request.post(`${baseUrl}/auth/register`, registerData),
        update: (updateData) => request.post(`${baseUrl}/auth/update`, updateData),
        logout: () => request.post(`${baseUrl}/auth/logout`),
        profile: (id) => request.get(`${baseUrl}/profile/${id}`)
    };
};