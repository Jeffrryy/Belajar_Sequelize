import User from "../models/UserModel.js";
import Book from "../models/BookModel.js";
import db from "../utils/connection.js";

// await User.sync();
// await Book.sync();

await db.sync();
