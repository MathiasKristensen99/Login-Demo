import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {Product} from "../shared/product.model";
import {Observable} from "rxjs";
import {ProductList} from "../shared/product-list.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  $products: Observable<ProductList> | undefined;

  constructor(private _productsService: ProductsService, private _router: Router) { }

  ngOnInit(): void {
    this.$products = this._productsService.getProducts();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this._productsService.addProduct({name} as Product).subscribe(value => {
    });
  }

  btnClick(): void {
    this._router.navigateByUrl('/products')
  }
}
