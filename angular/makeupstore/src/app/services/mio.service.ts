import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { LoginObject } from '../login/shared/login-object.model';
import { Logged } from '../core/models/logged.model';


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
  

  logout(): Observable<Boolean> {
    console.log("estoy en mio2");
    return this.http.post<Boolean>(this.dbUrl + 'logout', {});
  }

  getAllProductsFromDatabase(): Observable<any>{
    let requestUrl = this.dbUrl + 'all'; 
    return this.http.get<any>(requestUrl);
  }
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   // array in local storage for registered users
  //   let users: any[] = JSON.parse(localStorage.getItem('users')) || [];

  //   // wrap in delayed observable to simulate server api call
  //   return of(null).pipe(mergeMap(() => {

  //     // fake authenticate api end point
  //     if (request.url.endsWith('/api/authenticate/login') && request.method === 'POST') {
  //       let params = request.body;

  //       // check user credentials and return fake jwt token if valid
  //       let found: User = USERS.find((user: User) => {return (params.email === user.email);});
  //       if (found) {
  //         if(params.password === found.password) {
  //           return of(new HttpResponse({status: 200, body: {token: 'fake-token-jwt', user: found}}));
  //         }else{
  //           return throwError({code: 2, message: 'The password does not match '});
  //         }
  //       } else {
  //         return throwError({code: 1, message: 'Username does not exists'});
  //       }

  //     }

  //     if (request.url.endsWith('/api/authenticate/logout') && request.method === 'POST') {
  //       return of(new HttpResponse({status: 200, body: true}));
  //     }

  //     // pass through any requests not handled above
  //     return next.handle(request);

  //   }))

  //   // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
  //     .pipe(materialize())
  //     .pipe(delay(500))
  //     .pipe(dematerialize());
  // }
}






// export let fakeBackendProvider = {
//   // use fake backend in place of Http service for backend-less development
//   provide: HTTP_INTERCEPTORS,
//   useClass: FakeBackendInterceptor,
//   multi: true
// };
