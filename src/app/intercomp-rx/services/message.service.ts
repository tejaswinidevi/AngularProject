//message broker

import { Injectable } from "@angular/core";
import { Observable,Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class MessageService{
 private subject = new Subject<any>()

 //producer method
 sendMessage(message:string){
     //make ajax call to api/web socket
     this.subject.next({text:message})
 }
 clearMessage(){
     this.subject.next({})
 }

 getMessage():Observable<any>{
     return this.subject.asObservable()
 }
}