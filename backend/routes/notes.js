const express = require("express");
const { check } = require("express-validator");

const notesControllers = require("../controllers/notes-controller");

const router = express.Router();

router.get("/user/:uid", notesControllers.getNotesByUserId);

router.post("/", notesControllers.createNote);

router.patch("/:id", notesControllers.updateNote);

router.delete("/:pid", notesControllers.deleteNote);

module.exports = router;
