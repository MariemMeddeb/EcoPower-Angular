import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ListCategoryComponent } from './admin/list-category/list-category.component';
import { CartComponent } from './front/shop/cart/cart.component';
import { ProductsComponent } from './front/shop/products/products.component';
import { ProductbycatComponent } from './front/shop/productbycat/productbycat.component';

const routes: Routes = [
  {path: 'add', component: AddProductComponent},
   {path: 'listProduct', component: ListProductComponent },
   {path: 'admin', component: DashboardComponent},
   {path: 'addCategory', component: AddCategoryComponent},
   {path: 'listCategory', component: ListCategoryComponent},
   {path: 'cart', component: CartComponent},
   {path: 'products', component: ProductsComponent},
   {path: 'listProduct/:id', component: ProductbycatComponent },
   


   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
