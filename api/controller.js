const { where } = require("sequelize");
const { Book, User } = require("./model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports.simpleGetRequest = (req, res) => {
  console.log("backend route");
  res.send("backend route");
};

module.exports.dbCall = async (req, res) => {
  console.log("db route");
  res.send("db route");
};

module.exports.signUp = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  const hash = bcrypt.hashSync(password, salt);
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hash,
      phoneNumber,
    });
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    users = await User.findAll({
      where: {
        email: email,
      },
    });
    var response = await bcrypt.compare(password, users[0].password);
  } catch (error) {
    console.log(error);
  }
  if (response) {
    res.send(response);
  } else {
    res.status(404).send("error occurred while fetching data");
  }
};
