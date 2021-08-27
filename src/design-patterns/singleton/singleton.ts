/**
 * `Database` controlls how it is initialized and
 * should only call a constructor if there is not
 * any existing instance of its class
 */
export class Database {
  private static _instance: Database;

  private constructor() {}

  static get instance(): Database {
    console.log(this);
    if (!this._instance) {
      this._instance = new Database();
    }

    return this._instance;
  }
}
