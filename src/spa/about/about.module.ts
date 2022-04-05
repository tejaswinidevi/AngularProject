import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { aboutRouteModule } from './about.routes';


@NgModule({
    imports: [CommonModule, aboutRouteModule],
    exports: [],
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule { }
