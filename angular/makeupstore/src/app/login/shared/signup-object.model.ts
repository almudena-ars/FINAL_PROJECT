
export class SignUpObject {

  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;

  constructor( object: any){
    console.log("estoy en signup-object")
    this.firstName = (object.firstName) ? object.firstName : null;
    this.lastName = (object.lastName) ? object.lastName : null;
    this.email = (object.email) ? object.email : null;
    this.password = (object.password) ? object.password : null;
    console.log(this.firstName + this.lastName + this.email + this.password)
  }
}
