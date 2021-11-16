import axios, { AxiosResponse } from "axios";
import APIConfigurator from "../../classes/APIConfigurator";
import { IExcercise } from "./ExcerciseList.interface";

export class ExcerciseListAPI extends APIConfigurator {
  
  constructor() {
    super();
  }  
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
   * getExcerciseToTraining
  */
  public async getExcerciseToTraining(trainingId: number) {
    try {
      axios.post(`${this._serverLink}/excercises/${trainingId}`, this._config);
    } catch (error) {
      throw new Error('Can\'t create excercise!');
      
    }
  }

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

}