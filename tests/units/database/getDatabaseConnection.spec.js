import sequelize from 'sequelize';
import { getDatabaseConnection } from '../../../src/database/getDatabaseConnection';

describe('getDatabaseConnection', () => {
  it('should return database connection with correct params', () => {
    const mockedHost = 'localhost:3306';
    const mockedUserName = 'root';
    const mockedPassword = '123';

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
});
