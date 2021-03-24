import axios from "axios";

export const musicService = {
    async getTopAlbum(page) {
        const {data} = await axios.get(`http://ws.audioscrobbler.com/2.0/?page=${ page }&method=user.gettoptracks&user=rj&api_key=e60744e1a92823e7dc845b8a03f1e219&format=json`);
        return data;
    }
}