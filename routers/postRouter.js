const router = require("express").Router();

const db = require("../data/helpers/posts-model.js");

router.get("/", async (req, res) => {
  try {
    const posts = await db.find();
    if (posts) {
      res.status(200).json(posts);
    }
  } catch (error) {
    res.status(500).json({ message: `Posts could not be found ${error}.` });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await db.findById(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res
        .status(404)
        .json({ message: "Post with specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({ message: `Post request failed ${error}.` });
  }
});

router.post("/", async (req, res) => {
  const post = req.body;
  try {
    const newPost = await db.create(post);
    if (newPost) {
      res.status(201).json(newPost);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Your post could not be posted ${error}.` });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await db.remove(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({
      message: `The post's information could not be modified: ${error}.`
    });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const newPost = req.body;

  try {
    const editedPost = await db.update(newPost, id);
    if (editedPost) {
      res.status(200).json(editedPost);
    } else {
      res.status(404).json({
        message: "The post with the specified ID does not exist."
      });
    }
  } catch (error) {
    res.status(500).json({
      message: `The post's information could not be modified: ${error}.`
    });
  }
});

module.exports = router;
