const mongoose = require("mongoose");

async function mongoConnect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 150,
    });
    console.log("Connected to DB");
  } catch (err) {
    console.log("Error Connecting to DB");
    process.exit();
  }
}
module.exports = {
  mongoConnect,
};
