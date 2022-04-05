import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Session } from './globals';

@Injectable({providedIn: 'root'})
export class CheckRoleGuard implements CanLoad {
    constructor() { }

    canLoad(route: Route) {
        if(Session.authenticated == true){
            alert('You are able to download lazy module')
            return true;
        }
        else{
            alert('You have to login to download lazy module')
            return false
        }
        
    }
}