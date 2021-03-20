import {instance} from "./axios-config";

export const authService = {
    async getAuthData() {
        const {data} = await instance.get(`auth/me`);
        return data;
    },
    async login(email, password, rememberMe, captcha) {
        const {data} = await instance.post(`/auth/login`, {email, password, rememberMe, captcha});
        return data;
    },
    async logout() {
        const {data} = await instance.delete(`/auth/login`);
        return data;
    },
    async getCaptcha() {
        const {data} = await instance.get(`/security/get-captcha-url`);
        return data;
    }
};