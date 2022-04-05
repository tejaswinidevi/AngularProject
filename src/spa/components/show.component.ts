//read route params
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `
      <h1 class="bg-info text-center">
        You have selected {{name}}
      </h1>
    `
})

export class ShowComponent implements OnInit {
    constructor(private _route:ActivatedRoute) { }
    name:string = ''

    ngOnInit() { 
        this.name = this._route.snapshot.params['selected']
    }
}