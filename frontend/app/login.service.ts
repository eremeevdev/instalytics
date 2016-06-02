import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    constructor(private http: Http) { }

    getToken() {
        return window.localStorage.getItem('token') || '';
    }

    setToken(token: string) {
        window.localStorage.setItem('token', token);
    }

    doLogin(login: string, password: string) {
        let body = JSON.stringify({ login: login, password: password });
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        this.http.post('/api/token_auth/', body, {headers: headers}).toPromise()
    }

}