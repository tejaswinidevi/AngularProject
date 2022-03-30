import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'order-processor',
    template: `
     <h2 class="bg-primary">Order Processor</h2>
     <h3 class="bg-danger">
     Buying {{quantity}} shares of {{stockSymbol}}
     </h3>
     <sms-text [stock]="stockSymbol"> </sms-text>
    `
})

export class OrderProcessorComponent implements OnInit {
    constructor() { }
    @Input()
    stockSymbol:any

    @Input()
    quantity:any
    ngOnInit() { }
}