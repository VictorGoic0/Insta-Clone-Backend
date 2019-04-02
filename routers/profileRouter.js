const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../data/helpers/profiles-model.js");

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

router.post("/register", async (req, res) => {
  let { username, password } = req.body;
  if (!username || !password) {
    res.status(401).json({ message: "Please enter valid credentials" });
  } else {
    try {
      const hash = bcrypt.hashSync(password);
      password = hash;
      const newProfile = await db.create({ username, password });
      if (newProfile) {
        res.status(201).json(newProfile);
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: `Your profile could not be created ${error}.` });
    }
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
