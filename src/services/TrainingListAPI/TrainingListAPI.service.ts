import { ITraining } from './TrainingList.interface';
import axios, { AxiosResponse } from "axios";
import APIConfigurator from '../../classes/APIConfigurator';

export class TrainingListAPI extends APIConfigurator {
  constructor() {
    super();
  }
  /**
   * Get Training List from server.
   * 
   * Returns an array, that contains object with id and date of creation.
   * Otherwise returns an Error (temporary)
   */
  public async getTrainingList(): Promise<ITraining[]> {
    try {
      const response: AxiosResponse<ITraining[]> = await axios.get<ITraining[]>(process.env.NEXT_PUBLIC_GET_FIRST_30_TRAININGS!, this._config);
      return response.data;
    } catch (error) {
      throw new Error('Can\'t receive training list data from server!');
    }
  };




  /**
   * Delete training from TrainingList.
   */
  public async removeTraining(trainingId: number): Promise<void> {
    try {
      await axios.delete(`${this.trainings_api}/${trainingId}`, this._config);
    } catch (error) {
      throw new Error('Can\'t delete training from server!');
    }
  }

  /** 
   * Create new training.
   */
  public async createNewTraining(): Promise<void> {
    const _data = {
      "excercises": []
    };

    try {
      await axios.post(this.trainings_api!, _data, this._config);
    } catch (error) {
      throw new Error('Can\'t create new training!');
    }
  }

};