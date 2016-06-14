import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

    getToken() {
        return window.localStorage.getItem('token') || '';
    }

    setToken(token: string) {
        window.localStorage.setItem('token', token);
    }

    removeToken() {
		window.localStorage.removeItem('token');
    }

}