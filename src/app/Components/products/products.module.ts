import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/Shared/Modules/shared/shared.module';
import { ProductsService } from 'src/app/Shared/Services/products.service';
import { productListResolver } from 'src/app/Shared/Services/product-list-resolver';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  providers:[ProductsService, productListResolver]
})
export class ProductsModule { }
