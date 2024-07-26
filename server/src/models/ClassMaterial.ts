import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import client from "../services/db";

class ClassMaterial extends Model<
  InferAttributes<ClassMaterial>,
  InferCreationAttributes<ClassMaterial>
> {
  declare id: CreationOptional<number>;
  declare class_id: number;
  declare title: string;
  declare description: string;
  declare file_format: string;
  declare file_url: string;
  declare list_index: number;
}

ClassMaterial.init(
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
    file_format: {
      type: DataTypes.STRING(),
    },
    file_url: {
      type: DataTypes.STRING(),
    },
    list_index: {
      type: DataTypes.SMALLINT,
      defaultValue: 0,
    },
  },
  {
    sequelize: client,
    timestamps: false,
    tableName: "class_materials",
    modelName: "class_material",
  }
);

export default ClassMaterial;
