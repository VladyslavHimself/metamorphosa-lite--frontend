export class DateAPI {

  /**
   * Format to readable date.
   * 
   * Example: Mon Nov 08 2021
   */
  public formatDate(date: string): string {
    return new Date(date).toDateString();
  }

  /**
   * Check is input date similar with present
   */
  public isPresentDay(date: string): boolean {
    if (new Date(date).toDateString() === new Date().toDateString()) {
      return true;
    } else {
      return false;
    }
  }
}