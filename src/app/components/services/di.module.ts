import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { productService } from './product.service';

@NgModule({
    imports: [CommonModule],
    exports: [ProductComponent],
    declarations: [ProductComponent],
    providers: [productService],
})
export class DIModule { }
