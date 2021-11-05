import axios from "axios";

export class TrainingListAPI {

  /**
   * get training list from server
   */
  public async getTrainingList() {

    const config = {
      headers: {
        Authorization: `Bearer ${this._getTokenFromLocalStorage()}`
      }
    }

    try {
      const response = await axios.get('https://meta.mcteaparty.fun/api/trainings', config);
      return response.data;
    } catch (error) {
      console.error('can\'t receive training list data from server!')
    }
  }


  /**
   * name
   */
  public name() {
    
  }


  private _getTokenFromLocalStorage() {
    return localStorage.getItem('token');
  }
  
};