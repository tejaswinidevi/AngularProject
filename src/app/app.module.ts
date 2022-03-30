import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/components/Header.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { IOModule } from './components/intercomp/io.module';
import { DIModule } from './components/services/di.module';
import { ChildComponent, LifeCycleComponent } from './components/lifecycle/complifecycle';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BindingComponent, LifeCycleComponent, ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, IOModule, DIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
