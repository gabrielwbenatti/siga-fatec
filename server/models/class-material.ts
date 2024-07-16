import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "npm:sequelize@6.37.3";
import { client } from "../services/apiConfig.ts";

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
