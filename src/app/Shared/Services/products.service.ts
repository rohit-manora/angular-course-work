import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductsService {

  private URL = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }

  public getALLProducts() {
   return this.http.get(this.URL).pipe(map(item=>{
   return item;
    }))
  }
}
