import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChildren } from '@angular/core';
import{interval,Subscription} from 'rxjs'

@Component({
    selector: 'app-lifecycle',
    template: `
      <h1> Product Search: </h1>
      <input type="text" [(ngModel)]="search"/>

      <child [search]="search"></child>
    `
})

//parent
export class LifeCycleComponent{
   
    search:string = 'computers'
}

//child

@Component({
    selector: 'child',
    template: `
    <div class = "container">
      <h3 class="text-danger bg-warning"> Search Text: </h3>
      <h3 class="text-primary">{{search}}</h3>
      in Child <input type="text" [(ngModel)]="search"/>
      <h2 class="bg-info">count: {{count}}</h2>
      <h3 *ngFor="let item of items" id="txt1" #demo>Comcast</h3>
    </div>
    `,
    changeDetection:ChangeDetectionStrategy.OnPush //change detection gets stopped until an event or component changes, or when detectchanges is particularly added
})

export class ChildComponent implements OnInit, OnChanges, DoCheck{
    @Input() 
    search:string = ''
    count:number=0
    items=[1,2,3]

    @ViewChildren("demo")
    dm:any
    
    constructor(private cd:ChangeDetectorRef){
      console.log("In Constructor",this.search)
      this.cd.detach()//to detach parent from child
    }

    ngDoCheck():void{
      console.log("ng Do Check")
      //fired every time when state chnages, asking you whether to render or not
      /*
      if(this.search.length===5){
        //make an ajax call to rest api and get data and render
        this.cd.detectChanges()
      }
      */
     if(true){
      this.cd.detectChanges()
     }
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log("in noc", this.search)
      //live data of stock and validation
      for(let key in changes){
        console.log(`${key} changed
           -current: ${changes[key].currentValue}
           -previous: ${changes[key].previousValue}
        `)
      }
    }

    subscription:Subscription | undefined

    ngOnInit(){
      this.subscription = interval(1000).subscribe(console.log)
      //Initialization logic with AJAX call to rest api
      //register custom events, subscribe to observable/websockets
      console.log("in noi", this.search)
      /*
      setTimeout(()=>{
        this.cd.reattach()
      },5000)
      */
      setInterval(()=>{
        this.count++
        console.log("count is:"+ this.count)
      },1000)
    }

    ngAfterViewChecked(){
      //access real dom and use js/jquery to manipulate dom
      //do DOM related logic here
      console.log("DOM Manipulations go here")
      console.log("in viewChecked:", this.dm)
    }

    ngOnDestroy():void{
      //fired once, cleaning up logic (cache)
      //unregister events, unsubscribe websocket/observable to avoid memory leak
      console.log("component destroyed")
      this.subscription?.unsubscribe()
    }
}

