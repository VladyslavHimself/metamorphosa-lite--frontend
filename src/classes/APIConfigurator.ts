export default class APIConfigurator {

  readonly _serverLink = 'https://meta.mcteaparty.fun/api';
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