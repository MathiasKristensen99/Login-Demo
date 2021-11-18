import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './list/products.component';
import {HttpClientModule} from "@angular/common/http";
import { UpdateComponent } from './update/update.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    ProductsComponent,
    UpdateComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
