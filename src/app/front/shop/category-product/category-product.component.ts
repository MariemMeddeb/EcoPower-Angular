import { Component, Input } from '@angular/core';
import { CategoryProduct } from 'src/app/entities/category-product';
import { Product } from 'src/app/entities/product';
import { CategoryProductService } from 'src/app/services/category-product.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent {
  categories!: CategoryProduct[];
  productList: Array<Product> = [];
  @Input() products!: Product[];
 
  minPrice: number = 0;
  maxPrice: number = 0;
  constructor(private categoryProductService: CategoryProductService,public productService:ProductService) { }

  ngOnInit(): void {
    this.categoriesProductList();
    
  }
  categoriesProductList() {
    this.categoryProductService.getProductCategories().subscribe(data => {
      this.categories = data
    })
  }
  getProductsbyPrice(minPrice : number, maxPrice : number): void {
    this.productService.getProductsbyPrice(this.minPrice,this.maxPrice).subscribe((data: Product[]) => {
      this.productList = data;
    });
  }
  

}