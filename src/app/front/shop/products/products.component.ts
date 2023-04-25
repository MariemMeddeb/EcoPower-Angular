import { Component, Input } from '@angular/core';
import { CategoryProduct } from 'src/app/entities/category-product';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/product.service';
import { CategoryProductService } from 'src/app/services/category-product.service';
import { OrderItemService } from './../../../services/order-item.service';
import { Router } from '@angular/router';
import { OrderItem } from 'src/app/entities/order-item';
import { OrderMain } from 'src/app/entities/order-main';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css',]
})
export class ProductsComponent {
  product!:Product;
  order!:OrderMain;
  @Input() products: Product[] = [];
  orderItemList: Array<OrderItem>= [];
  productList: Array<Product> = [];
  categoryList: Array<CategoryProduct>=[]
  minPrice: number = 0;
  maxPrice: number = 0;
  id:number = 0;
 idP: number=0;
 idO: number=0;
  Checked: boolean = false;
 

  constructor(public productService: ProductService, public orderItemService:OrderItemService) {}

ngOnInit(): void {
   this.getProducts();
 
  
}
/**getById(idP: number): any {
  this.productService.getProductById(idP).subscribe((data: Product) => {this.product = data})
}*/

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

/**assignProdToCart(): void {
    //this.userId = authService.getUserId();
    orderId = orderComponent.id; 

  this.orderItemService.assignProductToCart(orderId,userId,p.id).subscribe(() => {
  console.log(`Product ${product.name} added to cart.`);
      },
      (error) => {
        console.log(error);
      }
    );
}*/

assignProductToCart(idP: number): void {
  this.orderItemService.assignProductToCart(idP).subscribe(() => {
    //this.productList = data;
    console.log(`Product added to cart.`);
    
  },
  (error) => {
    console.log(error);
  }
  );

//getProductByCat(id:number): void {
//  this.productService.getProductByCategory(id).subscribe((data: Product[]) => {
//    this.productList = data;
//  });
//}
}
}
