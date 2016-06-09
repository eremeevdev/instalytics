import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
import { UserAddComponent } from './user-add.component';

@Component({
    selector: 'users',
    templateUrl: 'app/users.component.html',
    directives: [UserAddComponent],
})
export class UsersComponent implements OnInit {

    constructor(private api: ApiService, private token: TokenService, private router: Router) { }

    ngOnInit() {

        this.api.get('/api/insta_users/')
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
                if(err.status == 401) {
                    this.router.navigate(['Login']);
                }
            });
    }

}
