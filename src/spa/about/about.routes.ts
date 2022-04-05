import { AboutComponent } from "./about.component";
import { RouterModule, Routes } from "@angular/router";

export const aboutRoutes:Routes=[
    {path:'', component:AboutComponent}
]

export const aboutRouteModule=
   RouterModule.forChild(aboutRoutes)