import {
  ConnectionSocket,
  IP,
  User,
  Server,
  ProxyServer,
  DevelopmentServer,
} from "./proxy";

describe("Proxy", () => {
  const serverIp: IP = "80.86.80.182";
  const serverPort: number = 5500;

  const userOne: User = new User("198.0.0.1", false);
  const userTwo: User = new User("198.0.0.2", false);
  const userThree: User = new User("198.0.0.3", true);

  const server: DevelopmentServer = new ProxyServer(
    new Server(serverIp, serverPort),
    new Map([
      [userOne.IP, userOne],
      [userThree.IP, userThree],
    ])
  );

  describe("Access", () => {
    it("Should have normal access", () => {
      const connection = server.connect(userOne.IP);

      expect(connection).toBeDefined();
      expect(connection.connection).toBe(
        `${userOne.IP}@${serverIp}:${serverPort}`
      );
    });

    it("Should have admin access", () => {
      const connection = server.adminConnect(userThree.IP);

      expect(connection).toBeDefined();
      expect(connection.connection).toBe(
        `ADMIN:${userThree.IP}@${serverIp}:${serverPort}`
      );
    });
  });

  describe("Denied access", () => {
    it("Should not have normal access", () => {
      expect(() => {
        server.connect(userTwo.IP);
      }).toThrow(new Error("Access denied"));
    });

    it("Should not have admin access", () => {
      expect(() => {
        server.adminConnect(userTwo.IP);
      }).toThrow(new Error("Access denied"));
    });
  });
});
