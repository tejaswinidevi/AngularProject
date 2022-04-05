import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(private ms:MessageService) { }
    //producer
    ngOnInit() { }

    sendMsg():void{
        this.ms.sendMessage('Message: Angular14.0 is latest now...use it');
    }

    clearMsg():void{
        this.ms.clearMessage()
    }
}