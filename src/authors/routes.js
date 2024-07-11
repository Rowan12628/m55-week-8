const { Router } = require("express");
const authorRouter = Router();

const { addAuthor } = require("./controllers");

authorRouter.get("/test", async (req, res) => {
  res.status(200).json({ message: "test okey dokey!" });
});

authorRouter.post("/addAuthor", addAuthor);

module.exports = authorRouter;
