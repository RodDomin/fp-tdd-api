import sequelize from 'sequelize';

export function getDatabaseConnection({ host, port, user, password }) {


  return new sequelize.Sequelize({
    host,
    port,
    username: user,
    password,
    dialect: 'mysql'
  });
}