import { DataTypes } from "sequelize";
import db from "../utils/connection.js";


const Room = db.define(
  //* memberikan nama model dengan nama Book, secara default jika tidak memberikan tablename maka akan menajdi nama jamak

  "Room",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    roomId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guestName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkIn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkOut: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Room",
  }
);

export default Room;
