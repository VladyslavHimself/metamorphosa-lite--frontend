import { ITraining } from './TrainingList.interface';
import axios, { AxiosResponse } from "axios";

export class TrainingListAPI {

  private readonly _serverLink = 'https://meta.mcteaparty.fun/api';
  private readonly _config = {
    headers: {
      Authorization: `Bearer ${this._getTokenFromLocalStorage()}`
    }
  };

  /**
   * Returns an array, that contains object with id and date of creation.
   * Otherwise returns an Error (temporary)
   */
  public async getTrainingList(): Promise<ITraining[]> {
    try {
      const response: AxiosResponse<ITraining[]> = await axios.get<ITraining[]>(`${this._serverLink}/trainings`, this._config);
      return response.data;
    } catch (error) {
      throw new Error('Can\'t receive training list data from server!');
    }
  };


  /**
   * get excercises from training list 
   */
  public async getExcercisesFromTraining(trainingId: number) {
    try {
      const response = await axios.get(`${this._serverLink}/excercises/${trainingId}`, this._config);
      return response.data;

    } catch (error) {
      throw new Error('Can\'t get excercises from server! ');
    }
  };

  /**
   * removeTraining
   */
  public async removeTraining(trainingId: number) {
    try {
      await axios.delete(`${this._serverLink}/trainings/${trainingId}`, this._config);
      console.log('deleted');
    } catch (error) {
      throw new Error('Can\'t delete training from server!');
    }
  }

  /**
   * createNewTraining
   */
  public async createNewTraining() {
    const _data = {
      "excercises": []
    };

    try {
      await axios.post(`${this._serverLink}/trainings`, _data, this._config);
    } catch (error) {
      throw new Error('Can\'t create new training!');
    }
  }

  private _getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('token');
  };
};