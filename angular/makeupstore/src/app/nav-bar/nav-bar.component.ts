import { Component, OnInit } from '@angular/core';
import { StorageService } from '../core/services/storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // admin: boolean;

  constructor(
    // private storageService: StorageService
    ) { 
    // this.admin = false;
  }

  ngOnInit(): void {
    // this.checkIfUserIsLogged();
  }

  // checkIfUserIsLogged(){

  //   console.log("check " +  this.admin)
  //   if(this.storageService.isAuthenticated()){
  //     this.admin = true;
  //   }else{
  //     this.admin = false;
  //   }
  // }

}
