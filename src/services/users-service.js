import {instance} from "./axios-config";

export const usersService = {
    async getUsers(page, count) {
        const {data} = await instance.get(`/users?page=${ page }&count=${ count }`);
        return data
    },
    async followUser(id) {
        const {data} = await instance.post(`/follow/${ id }`);
        return data;
    },
    async unfollowUser(id) {
        const {data} = await instance.delete(`/follow/${ id }`);
        return data;
    }
}