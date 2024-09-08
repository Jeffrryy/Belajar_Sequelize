import Room from "../models/RoomModel.js";
import Guest from "../models/GuestModel.js";

const createSeeder = async () => {
  const guest = await Guest.create({
    name: "Nicko Christian",
    email: "Nicko123@gmail.com",
  });

  const room1 = await Room.create({
    roomId:"1A",
    guestName:"Nicko Christian",
    checkIn:"10-07-2024",
    checkOut:"13-07-2024",
    UserId: guest.dataValues.id,
  });

  const room2 = await Room.create({
    roomId:"2A",
    guestName:"Nicko Christian",
    checkIn:"13-07-2024",
    checkOut:"15-07-2024",
    UserId: guest.dataValues.id,
  });

  const findRoomByGuest = await Room.findAll({
    where: {
      UserId: guest.dataValues.id,
    },
    attributes: ["roomId", "guestName", "checkIn", "checkOut", "UserId"],
  
  });

  return findRoomByGuest;
};

const guests = await createSeeder();

guests.map((item) => {
  console.log(item.dataValues);
});
