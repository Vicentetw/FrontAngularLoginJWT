import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY ='AuthUsername';
const AUTHORITIES_KEY = 'Authorities';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  roles: Array<string> =[];
  constructor() { }
  public setToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token)
  }

}
