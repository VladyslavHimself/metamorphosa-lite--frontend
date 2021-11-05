import axios from "axios";

export class TrainingListAPI {

  private readonly _serverLink = 'https://meta.mcteaparty.fun/api';
  private readonly _config = {
    headers: {
      Authorization: `Bearer ${this._getTokenFromLocalStorage()}`
    }
  };

  /**
   * get training list from server
   */
  public async getTrainingList() {
    try {
      const response = await axios.get(`${this._serverLink}/trainings`, this._config);
      return response.data;
    } catch (error) {
      console.error('can\'t receive training list data from server!')
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
      await axios.delete(`https://meta.mcteaparty.fun/api/trainings/${trainingId}`, this._config);
      console.log('deleted');
    } catch (error) {
      throw new Error('Can\'t delete training from server!');
    }
  }

  private _getTokenFromLocalStorage() {
    return localStorage.getItem('token');
  };
};