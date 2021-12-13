import {User} from "./user.model";

export class Logged {
  public get user(): User {
    return this._user;
  }
  public set user(value: User) {
    this._user = value;
  }
  public get token(): string {
    return this._token;
  }
  public set token(value: string) {
    this._token = value;
  }
  

  constructor(
    private _token: string,
    private _user: User
    
){}
}
