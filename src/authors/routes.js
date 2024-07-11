const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, getAuthorAndBooks } = require("./controllers");

// authorRouter.get("/test", async (req, res) => {
//   res.status(200).json({ message: "test okey dokey!" });
// });

authorRouter.post("/addAuthor", addAuthor);

authorRouter.get("/getAuthorAndBooks/:authorName", getAuthorAndBooks);

module.exports = authorRouter;
