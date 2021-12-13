import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from './model/cart.model';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private readonly dbUrl = 'http://localhost:8080/'

  constructor(
    private http: HttpClient
  ) { }



  private dataSource = new BehaviorSubject<Product>(new Product(0,",",0,",",",","",0));
  current = this.dataSource.asObservable();


  addToCart(product: Product) {

    this.dataSource.next(product);

  }

  saveCart(userId: number, productId: number): Observable <any>{
    const cartDTO = {
      userId: userId,
      productId: productId
    }
    return this.http.post<any>(this.dbUrl + `addcart`, cartDTO);
  }

  
  

  
}
