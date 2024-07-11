const { Router } = require("express");
const genreRouter = Router();

const { addGenre } = require("./controllers");

genreRouter.get("/test", async (req, res) => {
  res.status(200).json({ message: "test okey dokey!" });
});

genreRouter.post("/addGenre", addGenre);

module.exports = genreRouter;
