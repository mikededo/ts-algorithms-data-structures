import {
  ApiEnvFactory,
  ApiProducer,
  ApiResult,
  DevEnv,
  LocalDevEnv,
  LocalProdEnv,
  ProdEnv,
  RemoteDevEnv,
  RemoteProdEnv,
} from './abstract.factory';

describe('AbstractFactory', () => {
  describe('dev', () => {
    let factory: ApiEnvFactory;

    beforeEach(() => {
      factory = ApiProducer.loadApiFromEnv('DEV');
    });

    it('should create a DevEnv factory', () => {
      expect(factory).toBeDefined();
      expect(factory).toBeInstanceOf(DevEnv);
    });

    it('should create a LocalDevEnv', () => {
      expect(factory.localEnv()).toBeInstanceOf(LocalDevEnv);
    });

    it('should create a RemoteDevEnv', () => {
      expect(factory.remoteEnv()).toBeInstanceOf(RemoteDevEnv);
    });

    it('should return a GET output of a LocalDevEnv', () => {
      const api = factory.localEnv();

      expect(api.GET('/product')).toEqual({
        environment: 'LocalDev',
        method: 'GET',
        url: 'http://localhost:8000/product',
        body: null,
      } as ApiResult);
    });

    it('should return a POST output of a RemoteDevEnv', () => {
      const api = factory.remoteEnv();

      expect(api.POST('/product', { id: 1, name: 'AbstractFactory' })).toEqual({
        environment: 'RemoteDev',
        method: 'POST',
        url: 'https://dev.app.com/product',
        body: { id: 1, name: 'AbstractFactory' },
      } as ApiResult);
    });
  });

  describe('prod', () => {
    let factory: ApiEnvFactory;

    beforeEach(() => {
      factory = ApiProducer.loadApiFromEnv('PROD');
    });

    it('should create a ProdEnv factory', () => {
      expect(factory).toBeDefined();
      expect(factory).toBeInstanceOf(ProdEnv);
    });

    it('should create a LocalProdEnv', () => {
      expect(factory.localEnv()).toBeInstanceOf(LocalProdEnv);
    });

    it('should create a RemoteProdEnv', () => {
      expect(factory.remoteEnv()).toBeInstanceOf(RemoteProdEnv);
    });

    it('should return a GET output of a LocalProdEnv', () => {
      const api = factory.localEnv();

      expect(api.GET('/product')).toEqual({
        environment: 'LocalProd',
        method: 'GET',
        url: 'https://local.app.com/product',
        body: null,
      } as ApiResult);
    });

    it('should return a POST output of a RemoteProdEnv', () => {
      const api = factory.remoteEnv();

      expect(api.POST('/product', { id: 1, name: 'AbstractFactory' })).toEqual({
        environment: 'RemoteProd',
        method: 'POST',
        url: 'https://app.com/product',
        body: { id: 1, name: 'AbstractFactory' },
      } as ApiResult);
    });
  });
});
