const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  getByAuthor,
  updateByTitle,
  delBook,
  delAllBooks,
} = require("./controllers");

// "http://localhost:5001/books/test" the route test is mounted on the route books
bookRouter.get("/test", async (req, res) => {
  res.status(200).json({ message: "test okey dokey!" });
});

//http://localhost:5001/books/addBook
bookRouter.post("/addBook", addBook);

bookRouter.get("/getAllBooks", getAllBooks);

bookRouter.get("/getByAuthor/:author", getByAuthor);

bookRouter.put("/updateByTitle", updateByTitle);

bookRouter.delete("/delBook", delBook);

bookRouter.delete("/delAllBooks", delAllBooks);

module.exports = bookRouter;
