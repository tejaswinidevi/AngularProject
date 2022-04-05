import { AlwaysAuthGuard } from './services/alwaysauth.guard';
import { ContactListComponent } from './components/contactlist.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login.component";
import { ShowComponent } from './components/show.component';
import { NewContactComponent } from './components/newcontact.component'
import { CheckRoleGuard } from './services/checkrole.guard';
export const customRoutes:Routes=[
    {path:'',component:LoginComponent},
    {path:'contacts',component:ContactListComponent,
        canActivate:[AlwaysAuthGuard]},
    {path:'show/:selected',component:ShowComponent},
    {path:'newcontact',component:NewContactComponent},
    {path:'about', canLoad:[CheckRoleGuard], loadChildren:() => 
        import('./about/about.module')
        .then(m => m.AboutModule)
    },
    {path:'**',component:LoginComponent}
]
export const SpaRoutingModule=
RouterModule.forRoot(customRoutes)