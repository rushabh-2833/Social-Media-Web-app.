const mongoose = require("mongoose");
require('dotenv').config();

module.exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((con) =>
      console.log(`Database connected: ${con.connection.db.databaseName}`)
    )
    .catch((err) => console.log(err));
};
