 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/Models/product.model';
import { ProductsService } from 'src/app/Shared/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public isListView: boolean = false;
  public isGridView: boolean = true;
  public sortDirection: string = 'Asc';
  public productList: product[] = [];
  // private 


  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productList = this.route.snapshot.data['products'];
    this.onPriceFilterChange(null)
  }

  listView() {
    this.isListView = true;
    this.isGridView = false;
  }
  gridView() {
    this.isGridView = true;
    this.isListView = false;
  }
  onPriceFilterChange(filter: any | null) {
    if (filter) this.sortDirection = filter.value;
    if (this.sortDirection !== 'Asc') {
      this.productList.sort((a, b) => {
        return b.price - a.price;
      })
    }
    else {
      this.productList.sort((a, b) => {
        return a.price - b.price;
      })
    }
  }

}

