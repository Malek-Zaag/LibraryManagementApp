const { where } = require("sequelize");
const { Book, User } = require("./model");

module.exports.simpleGetRequest = (req, res) => {
  console.log("get request");
  res.send("backend is working");
};

module.exports.dbCall = async (req, res) => {
  console.log(req);
  res.send("db connectd");
  const book = await Book.findAll();
  console.log(JSON.stringify(book));

  User.update(
    { BookId: book[0].id },
    {
      where: {
        email: "test@gmail",
      },
    }
  );
};
