import {createSelector} from "reselect";

export const getUsersSuper = (state) => {
    return state.usersPage.users
}

export const getUserS = createSelector(getUsersSuper, (users) => {
    return users
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgerss = (state) => {
    return state.usersPage.followingInProgress
}