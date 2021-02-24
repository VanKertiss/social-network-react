import {getAuthUserData} from "./authReducer";

const INITIALAIZED_SUCCESS = 'INITIALAIZED_SUCCESS'

let initialState = {
    initialize: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALAIZED_SUCCESS:
            return {
                ...state,
                initialize: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALAIZED_SUCCESS});

export const initializeApp = () => async (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer;