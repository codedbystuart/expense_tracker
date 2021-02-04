import Sequelize from 'sequelize';

const sequelize = new Sequelize('sqlite:chinook.db');

const User = sequelize.define('user', {
  id: {
    field: 'Id',
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    field: 'Name',
    type: Sequelize.STRING,
  },
  email: {
    field: 'Email',
    type: Sequelize.STRING,
  },
  password: {
    field: 'Password',
    type: Sequelize.STRING,
  },
}, { timestamps: true });

export default User;
