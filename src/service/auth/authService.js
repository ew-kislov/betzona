import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

import { BACKEND_URL } from '../../constants'

export function login(username, password) {
    let token
    return axios.post(BACKEND_URL + '/login', { username, password })
        .then(response => token = response.data.data)
        .then(() => AsyncStorage.setItem('token', token))
        .then(() => AsyncStorage.setItem('username', username))
        .then(() => token)
}

export function logout() {
    return AsyncStorage.removeItem('token')
        .then(() => AsyncStorage.removeItem('username'))
}

export function initAuthData() {
    let token, username
    return AsyncStorage.getItem('token')
        .then(tokenItem => token = tokenItem)
        .then(() => AsyncStorage.getItem('username'))
        .then(usernameItem => username = usernameItem)
        .then(() => ({ token, username }))
}

export function registrate(username, email, password) {
    let formData = new FormData()
    formData.append('username', username)
    formData.append('email', email)
    formData.append('password', password)

    let token

    return axios.post(BACKEND_URL + '/signup', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
        .then(response => response.data.data.token)
        // .then(() => AsyncStorage.setItem('token', token))
        // .then(() => AsyncStorage.setItem('username', username))
        // .then(() => { console.warn(token); return token})
}