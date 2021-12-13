import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../core/models/user.model';
import { StorageService } from '../core/services/storage.service';
import { MioService } from '../services/mio.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userIsLogged: boolean;
  user:User;

  constructor(private storageService: StorageService,
    private router: Router,
    private mio: MioService) { 
    this.userIsLogged = false;
    this.user = new User(0, "", "", "", "", "");
  }

  ngOnInit(): void {
    this.checkIfUserIsLogged();
    if(this.userIsLogged){
      this.user = this.storageService.getCurrentUser();
    }
    
  }

  checkIfUserIsLogged(){
    console.log("esta autenticada? " + this.storageService.isAuthenticated())
    if(this.storageService.isAuthenticated()){
      this.userIsLogged = true;
    }else{
      this.userIsLogged = false;
    }
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  public logout(): void{
    this.storageService.logout();
  }

}
