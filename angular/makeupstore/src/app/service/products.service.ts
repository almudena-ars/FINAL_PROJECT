import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly apiUrl = 'https://fakestoreapi.com/';
  private readonly dbUrl = 'http://localhost:8080/'

  constructor(
    private http: HttpClient
  ) { }

  addNewProduct(productId: number, quantity:number): Observable<any>{
    const body = {
          productId: productId,
          quantity: quantity
        }
        return this.http.post<any>(this.dbUrl + `product`, body);
  
  }

  login(email:string, password: string): Observable<any> {
    console.log("authentication1")
    const signInDto = {
      email: email,
      password: password
    }
    
    return this.http.post<any>(this.dbUrl + `signin`, signInDto);
  }

  signin(email: string, password: string): Observable<any>{
    const SignInDto = {
      email: email, 
      password: password
    }
    return this.http.post<any>(this.dbUrl + `signin`, SignInDto);

}

  

  getAllProductsFromDatabase(): Observable<any>{
    let requestUrl = this.dbUrl + 'all'; 
    return this.http.get<any>(requestUrl);
  }

  getAvailableProductsFromDatabase(): Observable<any>{
    let requestUrl = this.dbUrl + 'all/available'; 
    return this.http.get<any>(requestUrl);
  }

  getProductById(productId: number): Observable<any>{
    console.log("getProductById");
    let requestUrl = this.apiUrl + 'products/' + productId; 
    return this.http.get<any>(requestUrl);
    
  }

  

  getAllProducts(): Observable<any>{
    console.log("hola4");
    let requestUrl = this.apiUrl + 'products'; 
    return this.http.get<any>(requestUrl);
  }

  getProductDetails(productUrl: string): Observable<any>{
    console.log("hola5");
    return this.http.get<any>(productUrl)
  }

  

  // getPokemonByName(name: string): Observable<any>{
  //   let requestUrl = this.apiUrl + name; 
  //   return this.http.get<any>(requestUrl);
    
  // }

  // getPokemonById(id: number): Observable<any>{
  //   let requestUrl = this.apiUrl + id; 
  //   return this.http.get<any>(requestUrl);
  // }

  // getTeamByTrainerId(trainerId: number): Observable<any>{
  //   let requestUrl = this.dbUrl + `/teamByTrainer?trainerId=${trainerId}`; 
  //   return this.http.get<any>(requestUrl);    
  // }

  // deletePokemonFromTeam(trainerId: number, pokemonId: number):Observable<any>{
  //   console.log("estoy aqui")
  //   return this.http.delete<any>(this.dbUrl + `pokemon?trainerId=${trainerId}&pokemonId=${pokemonId}`);
  // }

  // addNewTeam(trainerId: number, pokemonId: number):Observable<any>{

  //   const body = {
  //     trainerId: trainerId,
  //     pokemonId: pokemonId
  //   }
  //   return this.http.post<any>(this.dbUrl + `team`, body);
       
  // }
}
