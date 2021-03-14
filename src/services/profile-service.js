import {instance} from "./axios-config";

export const profileService = {
   async getUserProfile(id) {
        const {data} = await instance.get(`/profile/${ id }`);
        return data;
    }
}