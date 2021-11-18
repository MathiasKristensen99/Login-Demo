import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {Observable} from "rxjs";
import {Product} from "../shared/product.model";
import {ProductList} from "../shared/product-list.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  $products: Observable<ProductList> | undefined;

  constructor(private _productsService: ProductsService) { }

  delete(id: number): void {
    this._productsService.deleteProduct(id).subscribe();
  }


  ngOnInit(): void {
    this.$products = this._productsService.getProducts();
  }

}
