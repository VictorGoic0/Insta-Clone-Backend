const router = require("express").Router();
const authorization = require("./authorization.js");

const db = require("../data/helpers/likes-model.js");

router.post("/", authorization, async (req, res) => {
  try {
    const newLike = await db.create(req.body);
    if (newLike) {
      res.status(201).json(newLike);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Your like could not be posted ${error}.` });
  }
});

module.exports = router;
