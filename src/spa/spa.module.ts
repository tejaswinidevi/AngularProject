import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from './components/contactlist.component';
import { LoginComponent } from './components/login.component';
import { ShowComponent } from './components/show.component';
import { SpaComponent } from './spa.component';
import { SpaRoutingModule } from './spa.router';

@NgModule({
    imports: [CommonModule, SpaRoutingModule, FormsModule],
    exports: [SpaComponent],
    declarations: [LoginComponent, SpaComponent, ContactListComponent, ShowComponent],
    providers: [],
})
export class SpaModule { }
