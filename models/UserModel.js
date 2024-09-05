import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Book from "./BookModel.js";

const User = db.define(
  //* memberikan nama model dengan nama User, secara default jika tidak memberikan tablename maka akan menajdi nama jamak

  "User",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "user",
  }
);

// relasi User ke Book

//* artinya User bisa memiliki banyak buku
User.hasMany(Book, {
  //* cascade digunakan ketika data di tabel referensi dihapus, maka data yang terkait di tabel ini juga akan dihapus
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

//* Buku dimiliki satu user
Book.belongsTo(User, {
  foreignKey: "UserId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default User;
