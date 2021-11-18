import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from './products.service';


@Injectable()
export class productListResolver implements Resolve<Observable<any>> {
  constructor(private productService: ProductsService) {}

  resolve(): Observable<any> {
    return this.productService.getALLProducts();
  }
}