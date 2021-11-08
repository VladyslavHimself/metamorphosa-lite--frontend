import { IUserData } from './IAuth';

import axios from "axios";

export class AuthAPI {
  private readonly _url: string;

  constructor() {
    this._url = 'https://meta.mcteaparty.fun/api/auth/login';
  };

  /**
   * Authenticate user with server.
   * Returns true, if server response status 200, and false, if response status 401.
   * Otherwise returns new error.
   */

  public async auth ({email, password}: IUserData): Promise<boolean> {
    
    return await axios.post(this._url, {
      "email": email,
      "password": password
    }).then(data => {
      const token = data.data.token;
      this._writeTokenToLocalStorage(token);
      return true;
    }).catch(error => {
      if(error.response.status === 401) {
        throw new Error('Invalid password');
      } else if (error.response.status === 400) {
        return false;
      }
      
      throw new Error('Error in AuthAPI service');
    })
  }

  private _writeTokenToLocalStorage(token: string): void {
    localStorage.setItem('token', token);
  };
}