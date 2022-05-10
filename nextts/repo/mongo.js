const config = require("../ults/config");
const logger = require("../logger/logger");

module.exports = (client) => {
  const Search = async (doc, filter) => {
    const db = client.db().collection(doc);
  };

  const InsertandUpdateOne = async (doc, model) => {
    const db = client.db().collection(doc);
    const filter = model.id;
    const checkId = await db.findOne(filter);
    if (checkBatchId) {
      return await db.updateMany(filter, { $set: model });
    } else {
      const result = await db.insertOne(model);
      return result;
    }
  };

  return { InsertandUpdateOne };
  
};
