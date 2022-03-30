import { Component } from "@angular/core"

@Component({
    selector:`app-header`,
    template:`
    <h1 class="bg-warning text-center">{{title}}</h1>
    `
})
export class HeaderComponent{
 title:string = "SPA Casestudy of Comcast"
}