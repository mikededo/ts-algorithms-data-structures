import {
  DatabaseConfig,
  DatabaseConfigurator,
  MongoDatabase,
  MysqlDatabase,
  PostgresDatabase,
  RedisDatabase,
} from './builder';

describe('Builder', () => {
  describe('Mysql', () => {
    it('should return a Mysql configuration', () => {
      expect(
        new DatabaseConfigurator(new MysqlDatabase()).createConfiguration()
      ).toStrictEqual({
        database: 'MYSQL',
        baseUrl: 'http://mysql',
        port: 5050,
        user: 'mysql',
        password: 'mysql',
      } as DatabaseConfig);
    });
  });

  describe('Postgres', () => {
    it('should return a Postgres configuration', () => {
      expect(
        new DatabaseConfigurator(new PostgresDatabase()).createConfiguration()
      ).toStrictEqual({
        database: 'POSTGRES',
        baseUrl: 'http://postgres',
        port: 5432,
        user: 'postgres',
        password: 'postgres',
      } as DatabaseConfig);
    });
  });

  describe('Mongo', () => {
    it('should return a Mongo configuration', () => {
      expect(
        new DatabaseConfigurator(new MongoDatabase()).createConfiguration()
      ).toStrictEqual({
        database: 'MONGO',
        baseUrl: 'http://mongo',
        port: 27127,
        user: 'mongo',
        password: 'mongo',
      } as DatabaseConfig);
    });
  });

  describe('Redis', () => {
    it('should return a Redis configuration', () => {
      expect(
        new DatabaseConfigurator(new RedisDatabase()).createConfiguration()
      ).toStrictEqual({
        database: 'REDIS',
        baseUrl: 'http://redis',
        port: 8080,
        user: 'redis',
        password: 'redis',
      } as DatabaseConfig);
    });
  });
});
