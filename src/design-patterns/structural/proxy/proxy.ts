// Helpers classes
export type IP = string;

export class ConnectionSocket {
  constructor(
    private sIp: IP,
    private sPort: number,
    private cIp: IP,
    private admin: boolean = false
  ) {}

  get connection() {
    return `${this.admin ? "ADMIN:" : ""}${this.cIp}@${this.sIp}:${this.sPort}`;
  }
}

export class User {
  constructor(private ip: IP, private admin: boolean) {}

  get IP() {
    return this.ip;
  }

  get isAdmin() {
    return this.admin;
  }
}

// DevelopmentServer defines the interface of both the real
// service and the paroxy service
export interface DevelopmentServer {
  connect: (ip: IP) => ConnectionSocket;
  adminConnect: (ip: IP) => ConnectionSocket;
}

// The server will not be accessible to everyone, and only
// few will have administrator access
export class Server implements DevelopmentServer {
  constructor(private ip: IP, private port: number) {}

  connect(ip: IP): ConnectionSocket {
    return new ConnectionSocket(this.ip, this.port, ip);
  }

  adminConnect(ip: IP): ConnectionSocket {
    return new ConnectionSocket(this.ip, this.port, ip, true);
  }
}

// ProxyServer blocks only the allowed IPs
export class ProxyServer implements DevelopmentServer {
  constructor(private server: Server, private users: Map<IP, User>) {}

  connect(ip: IP) {
    if (!this.users.has(ip)) {
      throw new Error("Access denied");
    }

    return this.server.connect(ip);
  }

  adminConnect(ip: IP) {
    const user: User = this.users.get(ip);

    if (!(user && user.isAdmin)) {
      throw new Error("Access denied");
    }

    return this.server.adminConnect(ip);
  }
}
