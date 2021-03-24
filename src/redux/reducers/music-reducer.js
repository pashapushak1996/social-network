import {musicService} from "../../services/other-servises";

//action types
const SET_TRACKS = 'music/SET_TRACKS';
const SET_CURRENT_PAGE = 'music/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = '/music/SET_TOTAL_COUNT';

//action types
const setTracks = (payload) => ({type: SET_TRACKS, payload});
const setTotal = (count) => ({type: SET_TOTAL_COUNT, count});
export const setPage = (page) => ({type: SET_CURRENT_PAGE, page});

const initialState = {
    tracks: [],
    page: 1,
    totalCount: null,
    sizeOfPage: 50
};


const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRACKS: {
            return {...state, tracks: action.payload};
        }
        case SET_CURRENT_PAGE: {
            return {...state, page: action.page}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalCount: action.count}
        }
        default :
            return state;
    }
};

export const getTracks = (page) => async (dispatch) => {
    const {toptracks} = await musicService.getTopAlbum(page);
    dispatch(setTracks(toptracks.track));
    dispatch(setTotal(toptracks["@attr"]["total"]));
}


export default musicReducer;