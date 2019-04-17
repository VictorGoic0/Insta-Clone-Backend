const router = require("express").Router();

const db = require("../data/helpers/likes-model.js");

router.post("/", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const like = await db.remove(id);
    if (like) {
      res.status(200).json(like);
    } else {
      res
        .status(404)
        .json({ message: "The like with the specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({
      message: `The like's information could not be reached: ${error}.`
    });
  }
});

module.exports = router;
