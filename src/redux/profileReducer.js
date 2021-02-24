import {usersAPI, profileAPI} from '../Api/api';

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_FOTO = 'profile/SAVE_FOTO';

let initialState = {
    postsData: [{
        id: 1,
        message: "Hi, how are you? ",
        like: 2
    },
        {
            id: 2,
            message: "It's my first post. ",
            like: 28
        },
        {
            id: 3,
            message: "Go ",
            like: 35
        },
        {
            id: 4,
            message: "I'm happy ",
            like: 17
        },
        {
            id: 5,
            message: "It's my first post. ",
            like: 27
        }
    ],
    newPostText: 'Ivan-Ko',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = action.inputPost
            return {
                ...state,
                postsData: [...state.postsData, {id: 6, message: newPost}]
            }
        }
        case DELETE_POST: {
            return {
                ...state, postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS : {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_FOTO : {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (inputPost) => ({
    type: ADD_POST,
    inputPost
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status: status
})

export const saveFotoSuccess = (photos) => ({
    type: SAVE_FOTO,
    photos
})

//thunk

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0)
        dispatch(setStatus(status));
}

export const addMainFoto = (file) => async (dispatch) => {
    let data = await profileAPI.addMainFoto(file)
    if (data.resultCode === 0)
        dispatch(saveFotoSuccess(data.data.photos));
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0)
        dispatch(getUserProfile(userId))
   
}

export default profileReducer;