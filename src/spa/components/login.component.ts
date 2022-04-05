import {Component} from '@angular/core';
import {LoginService} from '../services/login.service'
import {User} from '../services/user'


@Component({
    providers: [LoginService],
    templateUrl:'./templates/login.component.html'
}) 
export class LoginComponent {
    status:boolean=false
    flag:boolean=false;
    public user = new User('murthy','welcome');// JSON Binding
    
    public errorMsg:any=''
 
    constructor(private _service:LoginService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Sorry...Invalid Username or Password'
            this.status=false;          
      
        }else{
            this.status=true;
        }
    }
    logout(event:any){       
        window.alert("You are successfully logged out")
        this.flag=true;
        this._service.logout();
        
       
        
    }
}

