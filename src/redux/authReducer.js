import {stopSubmit} from 'redux-form';
import {usersAPI, authAPI} from '../Api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userid: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userid, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userid, email, login, isAuth}
});

export const getAuthUserData = () => async (dispatch) => {
    let data = await usersAPI.getHeader()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)

        if (data.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            debugger
            let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
            dispatch(stopSubmit("Login", {_error: message}))
        };

}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
        if (data.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        };

}

export default authReducer;