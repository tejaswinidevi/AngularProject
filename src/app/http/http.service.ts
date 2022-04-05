import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { debounceTime,filter,map } from "rxjs";

const jwt_token = 'nsbahbwHQHBBMSNJNXNQ 82EUHNMWAN'
const httpOptions:any = {
    headers:new HttpHeaders({
        'Content-Type':'application/json','token':jwt_token
    })
}
@Injectable({providedIn:'root'})
export class HttpService{
    constructor(private http:HttpClient){
        console.log('HttpClient Injected')
    }
    base_url='http://localhost:3000'

    //CRUD
    getFoods():any{
      return this.http.get(this.base_url+'/api/food')
        .pipe(debounceTime(5000))
        .pipe(filter( response => response!=undefined))
        .pipe(map((response:any) => {
           console.log(response)
           return response
        }))
    }

    createFood(food:any){
        let body=JSON.stringify(food)
        return this.http.post(this.base_url+'api/food', body, httpOptions)
    }

    updateFood(food:any){
        let body=JSON.stringify(food)
        return this.http.put(this.base_url+'api/food'+food.id, body, httpOptions)
    }

    deleteFood(food:any){
        let body=JSON.stringify(food)
        return this.http.delete(this.base_url+'api/food'+food.id)
    }
}