import { IAuthData } from './IAuth';

import axios from "axios";

export class AuthAPI {
  private readonly _url: string;

  constructor() {
    this._url = 'https://www.mcteaparty.fun/api/metamorph/auth/login';
  };

  /**
   * Authentication user with server.
   */

  public async auth ({email, password}: IAuthData): Promise<boolean> {
    
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
      }

      throw new Error('Error in AuthAPI service');
    })
  }

  /**
   * Check auth data
   */
  public checkAuth() {
    
  }

  private _writeTokenToLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }
}