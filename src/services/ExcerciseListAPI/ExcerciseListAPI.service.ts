import axios, { AxiosResponse } from "axios";
import { IExcercise } from "./ExcerciseList.interface";

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
   public async getExcercisesFromTraining(trainingId: number): Promise<IExcercise[]> {
    try {
      const response: AxiosResponse<IExcercise[]> = await axios.get<IExcercise[]>(`${this._serverLink}/excercises/${trainingId}`, this._config);
      return response.data;
    } catch (error) {
      throw new Error('Can\'t get excercises from server!');
    }
  };


  /**
   * Delete excercise from server
   */
  public async deleteExcercise(excerciseId: number): Promise<void> {
    try {
      await axios.delete(`${this._serverLink}/excercises/${excerciseId}`, this._config);
    } catch (error) {
      throw new Error('Can\'t delete excercise from server!');
    }
  }

  private _getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('token');
  };
}