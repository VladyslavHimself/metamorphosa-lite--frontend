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
      const response: AxiosResponse<IPattern[]> = await axios.get(process.env.NEXT_PUBLIC_GET_ALL_PATTERNS!, this._config);
      return response.data;
    } catch (error) {
      throw new Error('Can\'t get patterns from server!');
    }
  }

  /**
   * getPatternById
   */
  public async getPatternById(id: number) {
    const response: AxiosResponse<IPattern[]> = await axios.get(
      `${process.env.NEXT_PUBLIC_GET_PATTERN_BY_ID}/${id}`,
       this._config
       ); 
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
      axios.post(process.env.NEXT_PUBLIC_CREATE_PATTERN!, _data, this._config);
    } catch (error) {
      throw new Error('Can\'t create new pattern!');
    }
  }

  /**
   * deletePattern
   */
  public async deletePattern(id: number) {
    
    try {
      return await axios.delete(`${process.env.NEXT_PUBLIC_DELETE_PATTERN_BY_ID}/${id}`, this._config);

    } catch (error) {
      throw new Error('Cant delete pattern');
    }
  };
}