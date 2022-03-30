import { Component, Input, OnInit } from '@angular/core';

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
    </div>
    `
})

export class ChildComponent {
    @Input() 
    search:string = ''
}