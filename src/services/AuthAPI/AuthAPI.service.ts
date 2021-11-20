import axios from "axios";
import { IUserData } from './IAuth';
import APIConfigurator from '../../classes/APIConfigurator';

export class AuthAPI extends APIConfigurator {
  constructor() {
    super();
  }

  /**
   * Authenticate user with server.
   * Returns true, if server response status 200, and false, if response status 401.
   * Otherwise returns new error.
   */
  public async auth ({email, password}: IUserData): Promise<boolean> {
    const auth_api = process.env.NEXT_PUBLIC_AUTH_API_LOGIN;

    return await axios.post(auth_api!, {
      "email": email,
      "password": password
    }).then(data => {
      const token = data.data.accessToken;
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
}