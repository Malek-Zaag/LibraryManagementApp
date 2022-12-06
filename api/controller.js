const { Book } = require("./model");

module.exports.simpleGetRequest = (req, res) => {
  console.log("get request");
  res.send("backend is working");
};

module.exports.dbCall = (req, res) => {
  console.log(req);
  res.send("db connectd");
  Book.create({
    title: "Clean Code",
    author: "Robert Cecil Martin",
    release_date: "2021-12-14",
    subject: 3,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error("Failed to create a new record : ", error);
    });
};
