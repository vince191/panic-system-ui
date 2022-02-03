import { Auth } from "aws-amplify";
import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_PANIC_ENDPOINT ?? 'np-url-found',
    headers: {
        'Content-Type': 'application/json'
    }
});

export function get(url: string) {
    return updateAccessToken().then(() => {
        return instance.get(url).then(res => { console.log(res); return res.data }).catch(err => console.log(err));
    }).catch((err: any) => console.log(err));
}

function updateAccessToken() {
    return Auth.currentAuthenticatedUser().then(user => {
        let accessToken = user.signInUserSession.accessToken.jwtToken;
        instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        return user;
    }).catch(err => console.log(err));
}

export function put(url: string, bodyParams: any) {
    return updateAccessToken().then(() => {
        return instance.put(url, bodyParams).then(res => { console.log(res); return res.data }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}