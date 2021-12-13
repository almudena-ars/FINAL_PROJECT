
import {Injectable} from "@angular/core";
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from "rxjs";
import { Logged } from "../models/logged.model";
import {User} from "../models/user.model";

@Injectable()
export class StorageService {

  private localStorageService;
  private currentSession : Logged;
  private emptyUser : User; 
  private emptySession : Logged;
  private user : User;
  private sessionDisable = new BehaviorSubject<boolean>(false);
  sessionStatus = this.sessionDisable.asObservable();
  check: boolean;

  

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
    this.emptyUser = new User(0, "", "", "", "", "");
    this.user = new User(0, "", "", "", "", "");
    this.emptySession = new Logged("", this.emptyUser);
    console.log("estoy en storage1");
    this.check = false;
  }

  setCurrentSession(session: Logged): void {
    this.currentSession = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
    console.log("estoy en storage2");
  }

  loadSessionData(): any{
    console.log("estoy en storage3");
    var sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Logged> JSON.parse(sessionStr) : null;
    
  }

  getCurrentSession(): Logged {
    console.log("estoy en storage4 " + this.currentSession);
    return this.currentSession;
  }

  removeCurrentSession(): void {
    console.log("estoy en storage5");
    this.localStorageService.removeItem('currentUser');
    this.currentSession = this.emptySession;
    
  }

  getCurrentUser(): any {
    console.log("estoy en storage6");
    var session: Logged = this.getCurrentSession();
    return (session && session.user) ? session.user : null;
  };

  isAuthenticated(): boolean {
    console.log("estoy en storage7");
    this.user = this.getCurrentUser();
    return (this.getCurrentToken() != null) ? true : false;
  };

  isAuthenticatedAdmin(): boolean {
    this.user = this.getCurrentUser();
    console.log(this.user.role)

    if(this.user.role === "admin"){
      return (this.getCurrentToken() != null) ? true : false;
    }
    return false;
  };

  getCurrentToken(): any {
    console.log("estoy en storage8");
    var session = this.getCurrentSession();
    return (session && session.token) ? session.token : null
  };

  logout(): void{
    console.log("estoy en storage9 logout");
    this.removeCurrentSession();
    this.check = true;
    this.cleanCart(this.check);    
    this.router.navigate(['/login']);
  }

  cleanCart(check: boolean){
    this.sessionDisable.next(check);  
  }

  

}
