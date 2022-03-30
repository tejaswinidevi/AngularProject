import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputBindingComponent } from './inputbinding.component';


import { OrderProcessorComponent } from './order-processor.component';
import { AppNotifyComponent, OutputComponent, PriceQuoterComponent } from './outputbinding';
import { SMSComponent } from './sms.component';

@NgModule({
    imports: [CommonModule],
    exports: [InputBindingComponent, OutputComponent],
    declarations: [
        InputBindingComponent,OrderProcessorComponent,SMSComponent,
        OutputComponent, PriceQuoterComponent, AppNotifyComponent
    ],
    providers: [],
})
export class IOModule { }
