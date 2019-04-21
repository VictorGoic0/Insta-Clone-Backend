const router = require("express").Router();

const db = require("../data/helpers/likes-model.js");

router.post("/", async (req, res) => {
  const { post_id, user_id } = req.body;
  try {
    const deletedLike = await db.remove(post_id, user_id);
    if (deletedLike) {
      res.status(200).json({ message: "Like modified.", liked: false });
    } else {
      const newLike = db.create(req.body);
      if (newLike) {
        res.status(200).json({ message: "Like created", liked: true });
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Your like could not be posted ${error}.` });
  }
});

module.exports = router;
