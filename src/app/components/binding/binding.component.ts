import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html'
})

export class BindingComponent implements OnInit {
    username:string=''
    constructor() {
        this.username="tejaswini"
     }
items:any=[
               {id:1,name:"Tejaswini",balance:5000},
               {id:2,name:"Kavitha", balance:1233},
               {id:3,name:"Bhavani",balance:2345}
          ]
    ngOnInit() {
        console.log("Binding Component Initialized")
     }

     clicked:boolean = false
     clickedItem:any = {name:'',balance:0}
     onItemClicked(customer:any){
        this.clicked=true
        this.clickedItem=customer
     }

     buttonStatus:boolean=false
     save(){
         alert("Congrats, you will be promoted...")
         this.buttonStatus=true
     }

     trackById(index:number, customer:any){
         return customer.id
     }
}