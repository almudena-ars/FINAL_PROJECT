
import {Component, OnInit} from "@angular/core";
import {Validators, FormGroup, FormControl} from "@angular/forms";
import {LoginObject} from "./shared/login-object.model";
import {StorageService} from "../core/services/storage.service";
import {Router} from "@angular/router";
import { MioService } from "../services/mio.service";
import { Logged } from "../core/models/logged.model";
@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  emailInput: FormControl;
  passwordInput: FormControl;
  public submitted: Boolean = false;

  checkLogin: boolean;

 


  constructor(private storageService: StorageService,
              private router: Router,
              private mio: MioService
              ) 
              { 
                this.checkLogin = false;
                this.emailInput = new FormControl('', [Validators.required, Validators.email]);
                this.passwordInput = new FormControl('',Validators.required);
                this.loginForm = new FormGroup({
                  email: this.emailInput,
                  password: this.passwordInput,
                })
              }

  ngOnInit() {
    
  }

  public submitLogin(): void {
    console.log("estoy en login1");
    this.submitted = true;
    if(this.loginForm.valid){
      this.mio.login(new LoginObject(this.loginForm.value)).subscribe(
        data => this.correctLogin(data)
      )
    }
  }

  private correctLogin(data: Logged){
    console.log("estoy en login2");
    this.storageService.setCurrentSession(data);
    console.log("jeje -> " + data.user.role);
    if(data.user.role === "admin"){
      this.router.navigate(['/admin']);
    }else{
      this.router.navigate(['/home']);
    }
    
  }

  public loggingIn(event: Event){
    this.checkLogin = true;

  }
}
