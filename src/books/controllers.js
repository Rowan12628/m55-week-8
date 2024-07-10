const Book = require("./model");

const addBook = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
    // const book = await Book.create({
    //   title: req.body.title,
    //   author: req.body.author,
    //   genre: req.body.genre,
    // });

    const book = await Book.create(req.body);

    res.status(201).json({ message: "success", book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200).json({ message: "success", books: books });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getByAuthor = async (req, res) => {
  try {
    const bookByAuthor = await Book.findOne({
      where: {
        author: req.body.author,
      },
    });

    res.status(200).json({ message: "success", bookByAuthor: bookByAuthor });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const delBook = async (req, res) => {
  try {
    const deleteBooks = await Book.destroy({
      where: {
        title: req.body.title,
      },
    });

    res.status(200).json({ message: "success", deleteBooks: deleteBooks });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const delAllBooks = async (req, res) => {
  try {
    const deleteAllBooks = await Book.truncate();

    res
      .status(200)
      .json({ message: "success", deleteAllBooks: deleteAllBooks });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  getByAuthor: getByAuthor,
  delBook: delBook,
  delAllBooks: delAllBooks,
};
