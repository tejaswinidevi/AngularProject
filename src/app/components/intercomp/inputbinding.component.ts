import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-stock',
    templateUrl: './inputbinding.component.html'
})

//parent component
export class InputBindingComponent implements OnInit {
    stock:any = ""
    quantity:any = null

    onInputEvent(event:any){
    this.stock= event.target.value
    }

    ngOnInit() { }
}