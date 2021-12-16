import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private readonly dbUrl = 'http://localhost:8080/'





 


  addToCart(product: Product) {

  }

  saveCart(userId: number, productId: number): Observable <any>{
    console.log("guardando el carro")
    const cartDTO = {
      userId: userId,
      productId: productId
    }
    return this.http.post<any>(this.dbUrl + `addcart`, cartDTO);
  }

  private localStorageService;
  private itemList: Array<Product>
  private currentList: Array<Product>;
   private _lista = new BehaviorSubject<Product[]>([]);
   sessionStatus = this._lista.asObservable();

  

  constructor(private router: Router,
    private http: HttpClient) {
    this.localStorageService = localStorage;
    this.itemList = [];
    this.currentList = this.loadSessionData();
  }
  ngOnInit(): void {
  }

  deleteItem(newList: Product[]){
    this.itemList = [];
    this.itemList = newList;
  }

  dropCart(){
    this.itemList = [];
  }

  setCurrentCart(cart: Product): void {
    console.log("estoy en el servicio cart")
    console.log(cart);
    
    this.itemList.push(cart);
    console.log(this.itemList);
    this.localStorageService.removeItem('currentCart');
    //this.currentCart = cart;
    this.localStorageService.setItem('currentCart', JSON.stringify(this.itemList));
    console.log("seteando el product");
    console.log(this.currentList);
    var productos : Array<Product> = this.getCurrentSession();
    //var jeje : Array<Product> = JSON.parse(this.loadSessionData());
    //const usersJson: any[] = Array.of(res.json());
    let storageProducts = JSON.parse(localStorage.getItem('currentCart') || '{}');
    this._lista.next(this.itemList);
    console.log("lista")
    console.log(this._lista)
  }

  loadSessionData(): any{
    console.log("estoy en storage3");
    var sessionStr = this.localStorageService.getItem('currentCart');
    return (sessionStr) ? <Array<Product>> JSON.parse(sessionStr) : null;
    
  }

  getCurrentSession(): Array<Product> {
    console.log("estoy en storage4 " + this.itemList);
    return this.currentList;
  }

  getCart(){
    var cart : Array<Product> = this.getCurrentSession();
    this._lista.next(cart);
  }

  removeCurrentSession(): void {
    console.log("estoy en storage5");
    this.localStorageService.removeItem('currentCart');
    this.itemList = [];
    
  }

  
  

  
}
