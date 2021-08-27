/**
 * `DatabaseBuilder` defines the methods each
 * implementation should have in order to
 * create a different `DatabaseConfig`
 */
export interface DatabaseBuilder {
  initDatabase(): void;

  initUrl(): void;

  initPort(): void;

  initUser(): void;

  initPassword(): void;

  get connection(): DatabaseConfig;
}

export class MysqlDatabase implements DatabaseBuilder {
  constructor(private config: DatabaseConfig = {}) {}

  initDatabase(): void {
    this.config.database = 'MYSQL';
  }

  initUrl(): void {
    this.config.baseUrl = 'http://mysql';
  }

  initPort(): void {
    this.config.port = 5050;
  }

  initUser(): void {
    this.config.user = 'mysql';
  }

  initPassword(): void {
    this.config.password = 'mysql';
  }

  get connection(): DatabaseConfig {
    return this.config;
  }
}

export class PostgresDatabase implements DatabaseBuilder {
  constructor(private config: DatabaseConfig = {}) {}

  initDatabase(): void {
    this.config.database = 'POSTGRES';
  }

  initUrl(): void {
    this.config.baseUrl = 'http://postgres';
  }

  initPort(): void {
    this.config.port = 5432;
  }

  initUser(): void {
    this.config.user = 'postgres';
  }

  initPassword(): void {
    this.config.password = 'postgres';
  }

  get connection(): DatabaseConfig {
    return this.config;
  }
}

export class MongoDatabase implements DatabaseBuilder {
  constructor(private config: DatabaseConfig = {}) {}

  initDatabase(): void {
    this.config.database = 'MONGO';
  }

  initUrl(): void {
    this.config.baseUrl = 'http://mongo';
  }

  initPort(): void {
    this.config.port = 27127;
  }

  initUser(): void {
    this.config.user = 'mongo';
  }

  initPassword(): void {
    this.config.password = 'mongo';
  }

  get connection(): DatabaseConfig {
    return this.config;
  }
}

export class RedisDatabase implements DatabaseBuilder {
  constructor(private config: DatabaseConfig = {}) {}

  initDatabase(): void {
    this.config.database = 'REDIS';
  }

  initUrl(): void {
    this.config.baseUrl = 'http://redis';
  }

  initPort(): void {
    this.config.port = 8080;
  }

  initUser(): void {
    this.config.user = 'redis';
  }

  initPassword(): void {
    this.config.password = 'redis';
  }

  get connection(): DatabaseConfig {
    return this.config;
  }
}

/**
 * `DatabaseConfigurator`, given a builer, will return
 * a `DatabaseConfig` which will be given by the 
 * concrete builder implementation
 */
export class DatabaseConfigurator {
  constructor(private builder: DatabaseBuilder) {}

  createConfiguration(): DatabaseConfig {
    this.builder.initDatabase();
    this.builder.initUrl();
    this.builder.initPort();
    this.builder.initUser();
    this.builder.initPassword();

    return this.builder.connection;
  }
}

export type DatabaseConfig = {
  database?: 'MYSQL' | 'POSTGRES' | 'MONGO' | 'REDIS';
  baseUrl?: string;
  port?: number;
  user?: string;
  password?: string;
};
