import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "npm:sequelize@6.37.3";
import { client } from "../services/apiConfig.ts";

class Teacher extends Model<
  InferAttributes<Teacher>,
  InferCreationAttributes<Teacher>
> {
  declare id: CreationOptional<number>;
  declare user_id: number;
  declare teach_since: Date;
  declare document: string;
  declare first_name: string;
  declare last_name: string;
}

Teacher.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    teach_since: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    document: {
      type: DataTypes.STRING(63),
      // allowNull: false,
      allowNull: true,
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize: client,
    timestamps: false,
    tableName: "teachers",
    modelName: "teacher",
  }
);

export default Teacher;
