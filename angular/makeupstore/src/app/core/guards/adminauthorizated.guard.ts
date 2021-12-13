
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {StorageService} from "../services/storage.service";

@Injectable()
export class AdminAuthorizatedGuard implements CanActivate {

  constructor(private router: Router,
              private storageService: StorageService) { }

  canActivate() {
    console.log("ADMINAUTO");
    console.log(this.storageService.isAuthenticatedAdmin());
    if (this.storageService.isAuthenticatedAdmin()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }

  
}
