require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;

const Book = require("./books/model");
const Author = require("./authors/model");

const bookRouter = require("./books/routes");
const authorRouter = require("./authors/routes");

const app = express();

app.use(express.json());

app.use("/books", bookRouter);
app.use("/authors", authorRouter);

const syncTables1 = () => {
  Book.sync();
};

const syncTables2 = () => {
  Author.sync();
};

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables1();
  syncTables2();
  console.log(`server is listening on port ${port}`);
});
