import { AuthResponse } from './../models/response/AuthResponse';
import { AxiosResponse } from "axios";
import $api from "../http";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/login', {email, password});
  }

  static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/registration', {email, password});
  }
  
  // #TODO Logout
  static async logout(): Promise<void> {
    return $api.post('/auth/logout');
  }
};