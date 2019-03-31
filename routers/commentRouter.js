const router = require("express").Router();

const db = require("../data/helpers/comments-model.js");

router.get("/:id/comments", async (req, res) => {
  const { id } = req.params;
  try {
    const comments = await db.find(id);
    if (comments) {
      res.status(200).json(comments);
    }
  } catch (error) {
    res.status(500).json({ message: `Comments could not be found ${error}.` });
  }
});

router.get("/:id/comments/:comID", async (req, res) => {
  const { comID } = req.params;
  try {
    const comment = await db.findById(comID);
    if (comment) {
      res.status(200).json(comment);
    } else {
      res
        .status(404)
        .json({ message: "Comment with specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({ message: `Comment request failed ${error}.` });
  }
});

router.post("/:id/comments", async (req, res) => {
  const comment = req.body;
  try {
    const newComment = await db.create(comment);
    if (newComment) {
      res.status(201).json(newComment);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Your comment could not be commented ${error}.` });
  }
});

router.delete("/:id/comments/:comID", async (req, res) => {
  const { comID } = req.params;
  try {
    const comment = await db.remove(comID);
    if (comment) {
      res.status(200).json(comment);
    } else {
      res
        .status(404)
        .json({ message: "The comment with the specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({
      message: `The comment's information could not be modified: ${error}.`
    });
  }
});

router.put("/:id/comments/:comID", async (req, res) => {
  const { comID } = req.params;
  const newComment = req.body;

  try {
    const editedComment = await db.update(newComment, comID);
    if (editedComment) {
      res.status(200).json(editedComment);
    } else {
      res.status(404).json({
        message: "The comment with the specified ID does not exist."
      });
    }
  } catch (error) {
    res.status(500).json({
      message: `The comment's information could not be modified: ${error}.`
    });
  }
});

module.exports = router;
