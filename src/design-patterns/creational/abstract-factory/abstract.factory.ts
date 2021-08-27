/**
 * The `Api` interface defines what methods
 * should have all the instances that can be
 * created by the factory
 */
export interface Api {
  GET(url: string): ApiResult;

  POST(url: string, body: any): ApiResult;

  PUT(url: string, body: any): ApiResult;

  PATCH(url: string, body: any): ApiResult;

  DELETE(url: string, body: any): ApiResult;
}

export interface ApiResult {
  environment: string;
  url: string;
  method: string;
  body: any;
}

/**
 * `LocalDevEnv`, `RemoteDevEnv`, `LocalProdEnv` and
 * `RemoteProdEnv`are the concrete implementations of
 *  the `Api` interface, which will be created by the factory.
 *
 * The url of each class will be passed by the factory
 */

export class LocalDevEnv implements Api {
  constructor(private url: string) {}

  GET(url: string): ApiResult {
    return output('LocalDev', `${this.url}${url}`, 'GET');
  }

  POST(url: string, body: any): ApiResult {
    return output('LocalDev', `${this.url}${url}`, 'POST', body);
  }

  PUT(url: string, body: any): ApiResult {
    return output('LocalDev', `${this.url}${url}`, 'PUT', body);
  }

  PATCH(url: string, body: any): ApiResult {
    return output('LocalDev', `${this.url}${url}`, 'PATCH', body);
  }

  DELETE(url: string): ApiResult {
    return output('LocalDev', `${this.url}${url}`, 'DELETE');
  }
}

export class RemoteDevEnv implements Api {
  constructor(private url: string) {}

  GET(url: string): ApiResult {
    return output('RemoteDev', `${this.url}${url}`, 'GET');
  }

  POST(url: string, body: any): ApiResult {
    return output('RemoteDev', `${this.url}${url}`, 'POST', body);
  }

  PUT(url: string, body: any): ApiResult {
    return output('RemoteDev', `${this.url}${url}`, 'PUT', body);
  }

  PATCH(url: string, body: any): ApiResult {
    return output('RemoteDev', `${this.url}${url}`, 'PATCH', body);
  }

  DELETE(url: string): ApiResult {
    return output('RemoteDev', `${this.url}${url}`, 'DELETE');
  }
}

export class LocalProdEnv implements Api {
  constructor(private url: string) {}

  GET(url: string): ApiResult {
    return output('LocalProd', `${this.url}${url}`, 'GET');
  }

  POST(url: string, body: any): ApiResult {
    return output('LocalProd', `${this.url}${url}`, 'POST', body);
  }

  PUT(url: string, body: any): ApiResult {
    return output('LocalProd', `${this.url}${url}`, 'PUT', body);
  }

  PATCH(url: string, body: any): ApiResult {
    return output('LocalProd', `${this.url}${url}`, 'PATCH', body);
  }

  DELETE(url: string): ApiResult {
    return output('LocalProd', `${this.url}${url}`, 'DELETE');
  }
}

export class RemoteProdEnv implements Api {
  constructor(private url: string) {}

  GET(url: string): ApiResult {
    return output('RemoteProd', `${this.url}${url}`, 'GET');
  }

  POST(url: string, body: any): ApiResult {
    return output('RemoteProd', `${this.url}${url}`, 'POST', body);
  }

  PUT(url: string, body: any): ApiResult {
    return output('RemoteProd', `${this.url}${url}`, 'PUT', body);
  }

  PATCH(url: string, body: any): ApiResult {
    return output('RemoteProd', `${this.url}${url}`, 'PATCH', body);
  }

  DELETE(url: string): ApiResult {
    return output('RemoteProd', `${this.url}${url}`, 'DELETE');
  }
}

/**
 * The abstract factory interface will be used to
 * determine whether it should return a local or
 * remote `Api`
 */
export interface ApiEnvFactory {
  localEnv(): Api;
  remoteEnv(): Api;
}

export class DevEnv implements ApiEnvFactory {
  localEnv(): Api {
    return new LocalDevEnv('http://localhost:8000');
  }

  remoteEnv(): Api {
    return new RemoteDevEnv('https://dev.app.com');
  }
}

export class ProdEnv implements ApiEnvFactory {
  localEnv(): Api {
    return new LocalProdEnv('https://local.app.com');
  }

  remoteEnv(): Api {
    return new RemoteProdEnv('https://app.com');
  }
}

/**
 * Finally, a `Producer` is created which will
 * return one of the two facories
 */
export class ApiProducer {
  static loadApiFromEnv(env: 'DEV' | 'PROD'): ApiEnvFactory {
    return env === 'PROD' ? new ProdEnv() : new DevEnv();
  }
}

function output(
  env: string,
  url: string,
  method: string,
  body: any = null
): ApiResult {
  return { environment: env, url, method, body };
}
