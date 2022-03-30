import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sms-text',
    template: `
     <h2 class="bg-info">sent SMS to customer about {{stock}}</h2>
    `
})

export class SMSComponent implements OnInit {

    @Input()
    stock:string=''
    constructor() { }

    ngOnInit() { }
}