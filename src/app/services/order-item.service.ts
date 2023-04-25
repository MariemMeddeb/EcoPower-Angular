import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../entities/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  baseUrl = 'http://localhost:9090/orderItem/'
  

  constructor(private httpClient: HttpClient) { }

  assignProductToCart(idP: number) :Observable<Product[]> {
    const body = { productId: idP };
    return this.httpClient.post<Product[]>(this.baseUrl + 'addToCard/' + idP, body);
  }

  post_options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
}
