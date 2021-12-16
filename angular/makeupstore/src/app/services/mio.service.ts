import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { LoginObject } from '../login/shared/login-object.model';
import { Logged } from '../core/models/logged.model';
import { SignUpObject } from '../login/shared/signup-object.model';


@Injectable({
  providedIn: 'root'
})
export class MioService {

  private readonly dbUrl = 'http://localhost:8080/'

  constructor(
    private http: HttpClient
  ) { }

  

  validateUser(email: string, password:string): Observable<any>{
    const SignInDto = {
          email: email,
          password: password
        }
        return this.http.post<any>(this.dbUrl + `signin`, SignInDto);
  
  }

  login(loginObj: LoginObject): Observable<Logged> {
    console.log("estoy en mio1");
    return this.http.post<any>(this.dbUrl + `signin`, loginObj);
    //aqui llamar al servicio
  }


  addNewProduct(id: number): Observable<any>{
    console.log("hola caracola")
    const newDto = {
      id: id
    }
    return this.http.post<any>(this.dbUrl + `addproduct`, newDto);
  } 
  
  signUp(signUpObj: SignUpObject): Observable<any>{
    return this.http.post<any>(this.dbUrl + `signup`, signUpObj);
  }

  logout(): Observable<Boolean> {
    console.log("estoy en mio2");
    return this.http.post<Boolean>(this.dbUrl + 'logout', {});
  }

  getAllProductsFromDatabase(): Observable<any>{
    let requestUrl = this.dbUrl + 'all'; 
    return this.http.get<any>(requestUrl);
  }

  purchase(userId: number, productId: number): Observable<any>{
    const TransactionDTO = {
      userId: userId,
      productId: productId
    }
    return this.http.post<any>(this.dbUrl + `save`, TransactionDTO);
  }

  getTransactionByUser(userId: number): Observable<any>{
    return this.http.get<any>(this.dbUrl + `allbyuser?userId=${userId}`);
  }

  getCartByUser(userId:number):Observable<any>{
    return this.http.get<any>(this.dbUrl + `cartbyuser?userId=${userId}`);
  }

  deleteCartByUser(userId: number): Observable<any>{
    
    return this.http.delete<any>(this.dbUrl + `deletebyuser?userId=${userId}`);
  }


}







