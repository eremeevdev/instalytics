import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
import { UserAddComponent } from './user-add.component';
import { InstaUser } from './insta-user';

@Component({
    selector: 'users',
    templateUrl: 'app/users.component.html',
    directives: [UserAddComponent],
})
export class UsersComponent implements OnInit {

    constructor(private api: ApiService, private token: TokenService, private router: Router) { }

    users: InstaUser[];

    onUserAdd(user: InstaUser) {
        this.users.push(user);
    }

    onUserClick(username: string) {
        this.router.navigate(['UserStat', { username: username }]);
    }

    ngOnInit() {

        this.api.get('/api/insta_users/')
            .then((response) => {
                this.users = response.json();
            })
            .catch((err) => {
                console.log(err);
                if(err.status == 401) {
                    this.router.navigate(['Login']);
                }
            });
    }

}
