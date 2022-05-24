// const repo = require("../repo/mongo");
const ult = require("../ults/response");

const Insert = (client) => async (req, res, next) => {
  console.log(12312312);
  // return await mongoRepo.InsertandUpdateOne();

  return res.json(ult.OK(null));
};
const Search = (client) => async (req, res, next) => {
  // return await mongoRepo.InsertandUpdateOne();

  return res.json(
    ult.OK({
      id: 1,
      type: "toyota",
      name: "civic",
      owner: "tson",
    })
  );
};
module.exports = {
  Insert,
  Search,
};
