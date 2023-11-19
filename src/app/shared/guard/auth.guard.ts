import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {

        const role= localStorage.getItem('role');

        if(role=='admin')
        {
           return true;
        }
        else{
            return false;
        }

        // if (localStorage.getItem('isLoggedin')) {
        //     return true;
        // }

        // this.router.navigate(['/login']);
        // return false;
    }
}
