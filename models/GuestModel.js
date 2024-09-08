import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Room from "./RoomModel.js";

const Guest = db.define(
  //* memberikan nama model dengan nama User, secara default jika tidak memberikan tablename maka akan menajdi nama jamak

  "Guest",
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
    tableName: "guest",
  }
);

// relasi User ke Book

//* artinya User bisa memiliki banyak buku
//* Buku dimiliki satu user
Room.belongsTo(Guest, {
  foreignKey: "UserId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});


Guest.hasMany(Room, {
  //* cascade digunakan ketika data di tabel referensi dihapus, maka data yang terkait di tabel ini juga akan dihapus
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});



export default Guest;
