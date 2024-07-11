const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getGenreAndBooks } = require("./controllers");

// genreRouter.get("/test", async (req, res) => {
//   res.status(200).json({ message: "test okey dokey!" });
// });

genreRouter.post("/addGenre", addGenre);

genreRouter.get("/getGenreAndBooks/:genreName", getGenreAndBooks);

module.exports = genreRouter;
