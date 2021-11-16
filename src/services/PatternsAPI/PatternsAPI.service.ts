import { IPattern } from './IPattern';
import axios, { AxiosResponse } from 'axios';
import APIConfigurator from '../../classes/APIConfigurator';
export class PatternsAPI extends APIConfigurator {
  constructor() {
    super();
  };

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
   * getPatternById
   */
  public async getPatternById(id: number) {
    const response: AxiosResponse<IPattern[]> = await axios.get(`${this._serverLink}/pattern/${id}`, this._config);
    return response.data;
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