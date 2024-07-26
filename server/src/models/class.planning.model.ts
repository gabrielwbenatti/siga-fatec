import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import client from "../services/db";

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
