import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

import {Observable, of} from 'rxjs'
import { debounceTime,switchMap,map,catchError } from "rxjs/operators";

@Component({
    selector:'app-weather',
    template:`
    <div class="container">
     <h3 class="bg-warning text-center">Live Weather Forecast by Song Kang</h3>
     City: <input type="text" [formControl]="searchInput"/>

     <h3 *ngIf="errorMessage != ' ' ">{{errorMessage}}</h3>
     <h3 *ngIf="loading">Searching...... </h3>

     <div class="bg-warning" *ngIf=" !loading && errorMessage==' ' ">
        <h3>Current Temperature of {{currentCity}} is {{temperature}}F</h3>
        <h3>Humidity: {{humidity}}%</h3>
        <h2>Status: {{description}}</h2>
     </div>    
    </div>  
    
    `

})
export class WeatherComponent{
    private base_url:string='http://api.openweathermap.org/data/2.5/weather?q='
    
    private urlSuffix:string='&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73'

    searchInput:FormControl = new FormControl()
    currentCity:string  | undefined
    temperature:string | undefined
    description:string | undefined
    humidity:string | undefined
    loading:boolean=false
    errorMessage:string = ' '

    constructor(private http:HttpClient){
        this.searchInput.valueChanges
                  .pipe( map( inputData =>{
                      this.loading=true
                      this.errorMessage=' '
                      return inputData
                  } ))
                  .pipe(debounceTime(3000))
                  .pipe(switchMap ( (city:string) =>{
                      return this.getWeather(city)
                      .pipe (catchError( err=>{
                          this.errorMessage='Error: please try again'
                          this.loading=false
                          return of([])
                      }))
                  }))
                  .subscribe({
                      next: (res:any) =>{
                          if (this.errorMessage== ' '){
                              this.currentCity=res.name+ ','+res.sys.country;
                              this.description=res.weather[0].description;
                              this.temperature=res.main.temp;
                              this.humidity=res.main.humidity
                          }
                          this.loading=false
                      },
                      error: (err:any)=>{
                          this.loading=false
                          this.errorMessage='Error: Please try again.'
                          console.log(`Error ${err.message}- ${err.url}`)
                          return of(err)
                      },
                      complete:()=>{
                          console.log('done')
                          return of([])// memory leaks
                      }
                  }
            )

       }//end of constructor

       ngOnInit(){
           this.searchInput.setValue('Chennai')
       }

       getWeather(city:string):Observable<Array<string>>{
           return this.http.get(this.base_url+city+this.urlSuffix)
              .pipe( map(  (response:any)=>{
                  console.log(response)
                  return response
              }))
       }
}