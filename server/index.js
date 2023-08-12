const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv:// ${process.env.DB_USER}:${process.env.DB_PASS}@jobportal.ydluey6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
console.log(uri);

app.get("/", (req, res) => {
  res.send("Job Portal Server Running!");
});

app.listen(port, () => {
  console.log(`Job Portal Server Running on, http://localhost:${port}`);
});
