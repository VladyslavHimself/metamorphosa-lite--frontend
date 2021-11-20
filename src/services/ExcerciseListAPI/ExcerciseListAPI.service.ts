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
      const response: AxiosResponse<IExcercise[]> = await axios.get<IExcercise[]>(
        `${process.env.NEXT_PUBLIC_GET_EXCERCISE_BY_ID}/${trainingId}`,
         this._config
         );
      return response.data;
    } catch (error) {
      throw new Error('Can\'t get excercises from server!');
    }
  };

  /**
   * addExcerciseToTraining
  */
  public async addExcerciseToTraining(trainingId: number, data: any) {
    try {
      axios.post(
        `${process.env.NEXT_PUBLIC_ADD_EXCERCISE_TO_TRAINING_BY_ID}/${trainingId}`,
        data,
        this._config
      );
    } catch (error) {
      throw new Error('Can\'t create excercise!');
      
    }
  }

  /**
   * Delete excercise from server
   */
  public async deleteExcercise(excerciseId: number): Promise<void> {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_DELETE_EXCERCISE_BY_ID}/${excerciseId}`, 
        this._config
      );
    } catch (error) {
      throw new Error('Can\'t delete excercise from server!');
    }
  }

}