import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface IPriceQuote{
    stockSymbol:string
    lastPrice:number
}

export interface ILogger{
    log(msg:string):void
}

//parent component
@Component({
    selector: 'app-event',
    template: `
      <div class="container bg-info">
       <h2 class="text-primary"> parent component received:
         {{stockSymbol}} - {{stockPrice | currency:'USD'}}
       </h2>
       <price-quoter (lastPriceEvent) = "priceQuoteHandler($event)"></price-quoter>
       <app-notify [info]="stockInfo"></app-notify>
      </div>
    `
})

export class OutputComponent implements OnInit {
    stockSymbol:string = ''
    stockPrice:number = 0
    stockInfo:IPriceQuote = {stockSymbol:'', lastPrice:0}

    priceQuoteHandler(event:IPriceQuote){
         this.stockSymbol = event.stockSymbol
         this.stockPrice = event.lastPrice
         this.stockInfo = {'stockSymbol':event.stockSymbol, 'lastPrice':event.lastPrice}
    }

    constructor() { }

    ngOnInit() { }
}

//1st child component
@Component({
    selector: 'price-quoter',
    template: `
      <h3 class="bg-dark text-warning">Child Price Quoter Component
      {{company}} - {{price | currency:'USD'}}</h3>
    `
})

export class PriceQuoterComponent implements OnInit,ILogger {
    log(msg: string): void {
        console.log(msg)
    }
    company:string = 'Comcast'
    price:number = 0 

    @Output()
    lastPriceEvent:EventEmitter<IPriceQuote> = new EventEmitter()

    constructor() { }
    ngOnInit() { 
        window.setInterval(()=>{
          let priceQuote:IPriceQuote={
            stockSymbol:this.company,
            lastPrice:100*Math.random()
          }
          this.price= priceQuote.lastPrice
          this.lastPriceEvent.emit(priceQuote)
        },1000)
    }
}

//second child 
@Component({
    selector: 'app-notify',
    template: `
      <div class = "bg-success">
        <h3>
           Sent notification about {{info.stockSymbol}}
            and stock value {{info.lastPrice}}
        </h3>
     </div>
    `
})

export class AppNotifyComponent implements OnInit {
    @Input()
    info:IPriceQuote = {'stockSymbol':'','lastPrice':0}
    constructor() { }

    ngOnInit() { }
}