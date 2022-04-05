import { Component, OnInit } from '@angular/core';

@Component({
    template: `
      <h1 class="bg-warning text-center">
       {{title}}
      </h1>
    `
})

export class AboutComponent implements OnInit {
    title:string = "Comcast grabbed 1 million project and we are top"
    constructor() { }

    ngOnInit() { }
}