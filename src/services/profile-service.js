import {instance} from "./axios-config";

export const profileService = {
    async getUserProfile(id) {
        const {data} = await instance.get(`/profile/${ id }`);
        return data;
    },
    async getUserStatus(id) {
        const {data} = await instance.get(`/profile/status/${ id }`);
        return data
    },
    async updateStatus(status) {
        const {data} = await instance.put(`/profile/status`, {status});
        return data;
    },
    async updatePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        const {data} = await instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return data;
    },
    async updateProfile(profileData) {
        const {data} = await instance.put(`/profile`,
            profileData
        );
        return data;
    }
};