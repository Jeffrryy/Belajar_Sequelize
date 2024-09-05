import User from "../models/UserModel.js";
import Book from "../models/BookModel.js";

const createSeeder = async () => {
  const user = await User.create({
    name: "John Doe",
    email: "john.doe@gmail.com",
  });

  const book1 = await Book.create({
    name: "Buku masak",
    page: 12,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eos et dolorum quae vero pariatur reiciendis nobis magni iusto magnam.",
    UserId: user.dataValues.id,
  });

  const book2 = await Book.create({
    name: "Buku ngoding",
    page: 20,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eos et dolorum quae vero pariatur reiciendis nobis magni iusto magnam.",
    UserId: user.dataValues.id,
  });

  const findBookByUser = await Book.findAll({
    where: {
      UserId: user.dataValues.id,
    },
    attributes: ["name", "page", "description", "UserId"],
    // include: [
    //   {
    //     model: User,
    //     as: "User",
    //     required: true,
    //     attributes: ["name", "email"],
    //   },
    // ],
  });

  return findBookByUser;
};

const users = await createSeeder();

users.map((item) => {
  console.log(item.dataValues);
});
