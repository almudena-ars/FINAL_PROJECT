
export class LoginObject {

  public email: string;
  public password: string;

  constructor( object: any){
    console.log("estoy en login-object")
    this.email = (object.email) ? object.email : null;
    this.password = (object.password) ? object.password : null;
  }
}
