import { ApplicationRef, ComponentFactoryResolver, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/components/Header.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { IOModule } from './components/intercomp/io.module';
import { DIModule } from './components/services/di.module';
import { ChildComponent, LifeCycleComponent } from './components/lifecycle/complifecycle';
import { HttpComponent } from './http/http.component';
import { WeatherComponent } from './http/weather.component';
import { SpaModule } from 'src/spa/spa.module';
import { HomeComponent } from './intercomp-rx/home/home.component';
import { ConsumerComponent } from './intercomp-rx/consumer.component';
import { NotifierComponent } from './notifier.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BindingComponent, LifeCycleComponent, 
    ChildComponent, HttpComponent, WeatherComponent, HomeComponent, ConsumerComponent, NotifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, IOModule, DIModule, HttpClientModule, ReactiveFormsModule, SpaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private appRef:ApplicationRef){
     const originalTick=appRef.tick;
     appRef.tick = function(){
       const winPerf=window.performance;
       const start=winPerf.now();
       const retValue=originalTick.apply(this)
       const end = winPerf.now()
       const runTime = end-start
       window.console.log("change detection time", runTime)
       return retValue;
     }
  }
}
