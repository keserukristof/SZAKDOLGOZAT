const express = require("express");
const { check } = require("express-validator");

const notesControllers = require("../controllers/notes-controller");

const router = express.Router();

router.get('/:nid', notesControllers.getNoteById);

router.get("/user/:uid", notesControllers.getNotesByUserId);

router.post("/", notesControllers.createNote);

router.patch("/:nid", notesControllers.updateNote);

router.delete("/:nid", notesControllers.deleteNote);

module.exports = router;
