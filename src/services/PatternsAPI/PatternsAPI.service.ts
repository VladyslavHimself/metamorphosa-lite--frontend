import { IPattern } from './IPattern';
import axios, { AxiosResponse } from 'axios';
export class PatternsAPI {
  constructor() {};

  private readonly _serverLink = 'https://meta.mcteaparty.fun/api';
  private readonly _config = {
    headers: {
      Authorization: `Bearer ${this._getTokenFromLocalStorage()}`
    }
  }

  /**
   * getPatternsList
   */
  public async getPatternsList(): Promise<IPattern[]> {
    try {
      const response: AxiosResponse<IPattern[]> = await axios.get(`${this._serverLink}/patterns/excercissss`, this._config);
      return response.data;
    } catch (error) {
      throw new Error('Can\'t get patterns from server!');
    }
  }

  /**
   * createNewPattern
   */
  public async createNewPattern(name: string, muscleTypes: string[]): Promise<void> {

    const _data = {
      "name": name,
      "muscleTypes": [...muscleTypes],
    }

    try {
      axios.post(`${this._serverLink}/patterns/excercissss`, _data, this._config);
    } catch (error) {
      throw new Error('Can\'t create new pattern!');
    }
  }

  private _getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('token');
  };


  /**
   * deletePattern
   */
  public async deletePattern(id: number) {
    
    try {
      return await axios.delete(`${this._serverLink}/patterns/${id}`, this._config);

    } catch (error) {
      throw new Error('Cant delete pattern');
    }
  };
}