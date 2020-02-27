export const BASE_URL = 'http://api.donorki.id'
export const AUTH_URL = `${BASE_URL}/oauth/token`
export const API_URL = `${BASE_URL}/api`
export let LOGIN_BODY = {
    grant_type: 'password',
    client_id: 2,
    client_secret: '9CA5xrKqVtHU9WVoAlAkLV7q7B3M5kETvEioEymC',
    scope: '*'
}
const AuthStr = 'Bearer '.concat(localStorage.getItem('access_token')); 
export let MY_HEADERS = { headers: { Authorization: AuthStr, Accept:'application/json', 'Content-Type': 'application/json'}}
export let HEADER_NO_BEARER = { headers: { Accept:'application/json', 'Content-Type': 'application/json'}}

export const register = `${API_URL}/register`
export const login = AUTH_URL
export const logout = `${API_URL}/logout`
export const kecamatan = `${API_URL}/kecamatan`
export const kabupaten = `${API_URL}/kabupaten`
export const golda = `${API_URL}/blood_type`
export const gender = `${API_URL}/gender_type`