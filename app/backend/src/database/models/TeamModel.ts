import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Teams extends Model {
  declare id: number;
  declare teamName: string;
}

Teams.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: {
    allowNull: false,
    type: STRING,
    field: 'team_name',
  },
}, {
  underscored: true,
  sequelize: db,
  tableName: 'teams',
  timestamps: false,
});

export default Teams;
