const Genre = require("./model");

const addGenre = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
    const genre = await Genre.create(req.body);

    res.status(201).json({ message: "success", genre: genre });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addGenre: addGenre,
};
