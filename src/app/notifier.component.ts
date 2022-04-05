import { Component, OnInit } from '@angular/core';
import { MessageService } from './intercomp-rx/services/message.service';


@Component({
    selector: 'app-notifier',
    template: `
      <div class="container text-center bg-warning">
      <h3>I am notifier component</h3>
      <div *ngIf="message" class="alert alert-success">
        {{message.text}}
      </div>
      </div>
    `
})

export class NotifierComponent implements OnInit {
    message:any
    subscription:any
    constructor(private ms:MessageService) { }

    ngOnInit() { 
        this.subscription=this.ms.getMessage()
        .subscribe((msg:any)=>{this.message=msg})
    }

    ngOnDestroy(){
        this.subscription.unsubscribe()//avoid memory leaks
    }
}