import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { TokenService } from './token.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

    constructor(private http: Http, private token: TokenService) { }

    getDefaultHeaders() {

        let csrfToken = Cookie.get('csrftoken');

        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
            'Authorization': 'Token ' + this.token.getToken()
        });

        let token = this.token.getToken()

        if(token) {
            headers.set('Authorization', 'Token ' + token)
        }

        return headers;
    }

    post(url: string, data: any) {

        let body = JSON.stringify(data);
        let csrfToken = Cookie.get('csrftoken');
        let headers = this.getDefaultHeaders();

        return this.http.post(url, body, { headers: headers }).toPromise();
    }

    delete(url: string) {

        let csrfToken = Cookie.get('csrftoken');
        let headers = this.getDefaultHeaders();

        return this.http.delete(url, { headers: headers }).toPromise();
    }


    get(url: string) {

        let headers = this.getDefaultHeaders();

        return this.http.get(url, { headers: headers }).toPromise();
    }

}
