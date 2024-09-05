import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import User from "./UserModel.js";

const Book = db.define(
  //* memberikan nama model dengan nama Book, secara default jika tidak memberikan tablename maka akan menajdi nama jamak

  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    page: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "book",
  }
);

export default Book;
