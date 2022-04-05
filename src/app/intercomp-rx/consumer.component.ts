import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
    selector: 'app-consumer',
    template: `
      <div class="container text-center bg-info">
      <h3>I am Consumer</h3>
      <div *ngIf="message" class="alert alert-success">
        {{message.text}}
      </div>
      </div>
    `
})

export class ConsumerComponent implements OnInit {
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