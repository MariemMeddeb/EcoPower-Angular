import { Component, Input } from '@angular/core';
import { CategoryProduct } from 'src/app/entities/category-product';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/product.service';
import { CategoryProductService } from 'src/app/services/category-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css',]
})
export class ProductsComponent {

  @Input() products: Product[] = [];
  productList: Array<Product> = [];
  categoryList: Array<CategoryProduct>=[]
  minPrice: number = 0;
  maxPrice: number = 0;
  id:number = 0;
  Checked: boolean = false;
 

  constructor(public productService: ProductService) {}

ngOnInit(): void {
   this.getProducts();
 
  
}

getProducts(): void {
  this.productService.getProductList().subscribe((data: Product[]) => {
    this.productList = data;
  });
}
getProductsbyPrice(minPrice : number, maxPrice : number): void {
  this.productService.getProductsbyPrice(this.minPrice,this.maxPrice).subscribe((data: Product[]) => {
    this.productList = data;
  });
}

//getProductByCat(id:number): void {
//  this.productService.getProductByCategory(id).subscribe((data: Product[]) => {
//    this.productList = data;
//  });
//}

}
