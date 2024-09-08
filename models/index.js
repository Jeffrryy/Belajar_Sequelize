import Guest from "./GuestModel.js";
import Room from "./RoomModel.js";
import db from "../utils/connection.js";

await Guest.sync()
await Room.sync()

await db.sync();
