import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { productService } from './product.service';

@Component({
    selector: 'app-di',
    template: `
      <h1 class="bg-warning">
       <div> ID:{{product.id}} </div>
       <div> Name:{{product.name}} </div>
       <div> Description:{{product.description}} </div>
       <div> Price:{{product.price}} </div>
      </h1>
    `,
    providers: [productService]
})

export class ProductComponent implements OnInit {
    constructor(private ps:productService) {
        console.log("product service injected")
     }
    product: any
    ngOnInit() { 
      this.product = this.ps.getProduct()
    }
}