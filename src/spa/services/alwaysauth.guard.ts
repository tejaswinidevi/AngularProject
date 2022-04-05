//canActivate(), canDeactivate(), resolve()
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Session } from './globals';

@Injectable({providedIn: 'root'})
export class AlwaysAuthGuard implements CanActivate {
    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       if(Session.authenticated == true){
           alert("you are authenticated as" + Session.username);
           return true
       }else{
           return false
       }
    }
}
