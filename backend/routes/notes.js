const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const notesControllers = require("../controllers/notes-controller");

const checkAuth = require('../middlewares/CheckAuth');


router.use(checkAuth);

router.get('/:nid', notesControllers.getNoteById);

router.get("/user/:uid", notesControllers.getNotesByUserId);

router.post("/", notesControllers.createNote);

router.patch("/:nid", notesControllers.updateNote);

router.delete("/:nid", notesControllers.deleteNote);

module.exports = router;
