import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "npm:sequelize@6.37.3";
import { client } from "../services/apiConfig.ts";

class ClassPlanning extends Model<
  InferAttributes<ClassPlanning>,
  InferCreationAttributes<ClassPlanning>
> {
  declare id: CreationOptional<number>;
  declare class_id: number;
  declare title: string;
  declare description: string;
  declare planned_date: Date;
  declare applied_date: Date;
}

ClassPlanning.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    class_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(),
    },
    description: {
      type: DataTypes.TEXT,
    },
    planned_date: {
      type: DataTypes.DATE,
    },
    applied_date: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: client,
    timestamps: false,
    tableName: "class_planning",
    modelName: "class_planning",
  }
);

export default ClassPlanning;
