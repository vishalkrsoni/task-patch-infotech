const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { mongoConnect } = require("./app/services/mongoConnect");
const cookieParser = require("cookie-parser");
const testimonialRouter = require("./app/routes/testimonialRouter");
const app = express();
dotenv.config();
const port = process.env.PORT;
mongoConnect();

app.use(cookieParser());

app.use(express.json());
app.use(cors());

app.use("/testimonial", testimonialRouter);


app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
