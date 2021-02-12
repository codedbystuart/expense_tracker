import Sequelize from 'sequelize';
import sequelize from '../database/config';

export default sequelize.define('user', {
  id: {
    field: 'UserId',
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
