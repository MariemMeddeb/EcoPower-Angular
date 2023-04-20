import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { NavComponent } from './admin/nav/nav.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ListCategoryComponent } from './admin/list-category/list-category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './front/shop/products/products.component';
import { CategoryProductComponent } from './front/shop/category-product/category-product.component';
import { SingleProductComponent } from './front/shop/single-product/single-product.component';
import { HeaderComponent } from './front/header/header.component';
import { FooterComponent } from './front/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './front/shop/cart/cart.component';
import { ProductbycatComponent } from './front/shop/productbycat/productbycat.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListProductComponent,
    AddProductComponent,
    NavComponent,
    SidebarComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    ProductsComponent,
    CategoryProductComponent,
    SingleProductComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProductbycatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
