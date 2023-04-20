import { Component } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css',
  '../../../assets/admin/css/paper-dashboard.css',
  '../../../assets/admin/demo/demo.css',
  '../../../assets/admin/css/bootstrap.min.css',]
})
export class ListProductComponent {
  productList: Array<Product> = [];
  constructor(public productService: ProductService) {}
ngOnInit(): void {
  return this.getProducts();
}
getProducts(): void {
  this.productService.getProductList().subscribe((data: Product[]) => {
    this.productList = data;
  });
}


onDelete(product: Product) {
  this.productService
    .deleteProduct(product)
    .subscribe(
      () =>
        (this.productList = this.productList.filter(
          (t) => t.id !== product.id
        ))
    );
}
}
