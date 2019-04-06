const router = require("express").Router();
const db = require("../data/helpers/profiles-model.js");
const secret = process.env.SECRET || "It's a secret";

router.get("/", async (req, res) => {
  try {
    const profiles = await db.find();
    if (profiles) {
      res.status(200).json(profiles);
    }
  } catch (error) {
    res.status(500).json({ message: `Profiles could not be found ${error}.` });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await db.findById(id);
    if (profile) {
      res.status(200).json(profile);
    } else {
      res
        .status(404)
        .json({ message: "Profile with specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({ message: `Profile request failed ${error}.` });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await db.remove(id);
    if (profile) {
      res.status(200).json(profile);
    } else {
      res
        .status(404)
        .json({ message: "The profile with the specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({
      message: `The profile's information could not be modified: ${error}.`
    });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const newProfile = req.body;

  try {
    const editedProfile = await db.update(newProfile, id);
    if (editedProfile) {
      res.status(200).json(editedProfile);
    } else {
      res.status(404).json({
        message: "The profile with the specified ID does not exist."
      });
    }
  } catch (error) {
    res.status(500).json({
      message: `The profile's information could not be modified: ${error}.`
    });
  }
});

module.exports = router;
