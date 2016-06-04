import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';

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
        let body = JSON.stringify({ username: login, password: password });

        let csrfToken = Cookie.get('csrftoken');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
        });

        this.http.post('/api/token_auth/', body, { headers: headers })
            .toPromise()
            .then(res => {
                this.setToken(res.json().token)
            })
            .catch(function(err: any) {
                console.log(err);
            });
    }

}