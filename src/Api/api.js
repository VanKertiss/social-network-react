import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e5d8205d-a263-4d92-b6d6-5f135c73364d'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 50) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getHeader() {
        console.warn('Obsolete method. Please use authAPI object')
        return authAPI.getHeader()
    },
    getFollow(u) {

        return instance.post(`follow/${u}`)
            .then(response => response.data)
    },
    getUnfollow(u) {

        return instance.delete(`follow/${u}`, {})
            .then(response => response.data)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
            .then(response => response.data);
    },
    addMainFoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    getHeader() {
        return instance.get(`auth/me`,)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe
        })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
