import {instance} from "./axios-config";

export const profileService = {
    async getUserProfile(id) {
        const {data} = await instance.get(`/profile/${ id }`);
        return data;
    },
    async getUserStatus(id) {
        const {data} = await instance.get(`/profile/status/${ id }`);
        return {data}
    },
    async updateStatus(status) {
        const {data} = await instance.put(`/profile/status`, {status});
        return {data};
    }
}