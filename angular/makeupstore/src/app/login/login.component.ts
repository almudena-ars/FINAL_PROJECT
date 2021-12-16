
import {Component, OnInit} from "@angular/core";
import {Validators, FormGroup, FormControl} from "@angular/forms";
import {LoginObject} from "./shared/login-object.model";
import {StorageService} from "../core/services/storage.service";
import {Router} from "@angular/router";
import { MioService } from "../services/mio.service";
import { Logged } from "../core/models/logged.model";
import { SignUpObject } from "./shared/signup-object.model";
@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  emailInput: FormControl;
  passwordInput: FormControl;
  public submittedLogIn: Boolean = false;

  public signupForm: FormGroup;
  firstNameInput: FormControl;
  lastNameInput: FormControl;
  emailInputSignUp: FormControl;
  passwordInputSignUp: FormControl;
  public submitted: Boolean = false;

  checkError: boolean;

  checkLogin: boolean;

  checkSignUp: boolean;


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

                this.firstNameInput = new FormControl('', Validators.required);
                this.lastNameInput = new FormControl('', Validators.required);
                this.emailInputSignUp = new FormControl('', Validators.required);
                this.passwordInputSignUp = new FormControl('',Validators.required);

                this.signupForm = new FormGroup({
                  firstName: this.firstNameInput,
                  lastName: this.lastNameInput,
                  email: this.emailInputSignUp,
                  password: this.passwordInputSignUp,
                })
                this.checkSignUp= false;
                this.checkError = false;
              }

  ngOnInit() {
    
  }

  public submitLogin(): void {
    console.log("estoy en login1");
    this.submittedLogIn = true;
    if(this.loginForm.valid){
      this.mio.login(new LoginObject(this.loginForm.value)).subscribe(
        data => this.correctLogin(data)
      )
    }
  }

  public submitSignUp(): void{
    this.submitted = true;
    if(this.signupForm.valid){
      this.mio.signUp(new SignUpObject(this.signupForm.value)).subscribe((response) => {                           //Next callback
        console.log('response received')
        alert(response.message);
      },
      (error) => {                              //Error callback
        console.error('error caught in component')
        alert("User already exists");     

    }
      )
    if(this.checkError === false){
      this.checkLogin = true;
      this.checkSignUp = false;
    }
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

  public signingIn(event: Event){
    this.checkSignUp = true;
  }
}
