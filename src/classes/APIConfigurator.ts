export default class APIConfigurator {
  readonly _serverLink = process.env.NEXT_PUBLIC_API;
  readonly _config = {
    headers: {
      Authorization: `Bearer ${this._getTokenFromLocalStorage()}`
    }
  };
  


  private _getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('token');
  };

  _writeTokenToLocalStorage(token: string): void {
    localStorage.setItem('token', token);
  };
};