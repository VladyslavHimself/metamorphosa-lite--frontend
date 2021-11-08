import axios, { AxiosResponse } from "axios";
import { Excercise } from "./ExcerciseList.interface";

export class ExcerciseListAPI {
  
  private readonly _serverLink = 'https://meta.mcteaparty.fun/api';
  private readonly _config = {
    headers: {
      Authorization: `Bearer ${this._getTokenFromLocalStorage()}`
    }
  };
  
  /**
   * Get excercises from Training, by id.
   * 
   * Returns array of excercises.
   */
   public async getExcercisesFromTraining(trainingId: number): Promise<Excercise[]> {
    try {
      const response: AxiosResponse<Excercise[]> = await axios.get<Excercise[]>(`${this._serverLink}/excercises/${trainingId}`, this._config);
      return response.data;
    } catch (error) {
      throw new Error('Can\'t get excercises from server! ');
    }
  };


  private _getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('token');
  };
}