import sequelize from 'sequelize';
import { getDatabaseConnection } from '../../../src/database/getDatabaseConnection';

describe('getDatabaseConnection', () => {
  it('should return database connection with correct params', () => {
      let mockedHost = 'localhost:3306';
      let mockedUserName = 'root';
      let mockedPassword = '123'

      const databaseConnector = getDatabaseConnection({
        host: mockedHost,
        password: mockedPassword,
        user: mockedUserName,
      });

      const { host, username, password } = databaseConnector.config;

      expect(databaseConnector).toBeInstanceOf(sequelize.Sequelize);
      expect(host).toBe(mockedHost);
      expect(username).toBe(mockedUserName);
      expect(password).toBe(mockedPassword);
    });
})