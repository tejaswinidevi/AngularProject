import { Injectable } from "@angular/core";
import { Product } from "./product";

interface ILogger{
    log(msg:string):void
}

@Injectable({providedIn:'root'})
export class productService implements ILogger{
    log(msg: string): void {
        console.log('logged'+msg)
        //ajax call with httpclient.post(url,msg)
    }

    getProduct():Product{
        this.log("somene invoked getProduct()")
        return new Product(101,'iphone', 'latestPhone', 55000)
    }
}