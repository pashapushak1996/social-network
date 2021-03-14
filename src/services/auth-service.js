import {instance} from "./axios-config";

export const authService = {
    async getAuthData() {
        const {data} = await instance.get(`auth/me`);
        return data;
    }
}