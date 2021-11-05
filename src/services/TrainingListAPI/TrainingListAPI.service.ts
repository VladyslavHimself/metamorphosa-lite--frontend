import axios from "axios";

export class TrainingListAPI {

  private _config = {
    headers: {
      Authorization: `Bearer ${this._getTokenFromLocalStorage()}`
    }
  }
  /**
   * get training list from server
   */
  public async getTrainingList() {

    try {
      const response = await axios.get('https://meta.mcteaparty.fun/api/trainings', this._config);
      return response.data;
    } catch (error) {
      console.error('can\'t receive training list data from server!')
    }
  }


  /**
   * get excercises from training list 
   */
  public async getExcercisesFromTraining(trainingId: number) {
    try {
      const response = await axios.get(`https://meta.mcteaparty.fun/api/excercises/${trainingId}`, this._config);
      return response.data;

    } catch (error) {
      throw new Error('Can\'t get excercises from server! ');
    }
  }


  private _getTokenFromLocalStorage() {
    return localStorage.getItem('token');
  }
  
};