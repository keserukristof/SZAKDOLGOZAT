const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/HttpError');
const Note = require('../models/Notes');
const User = require('../models/User');

const getNoteById = async (req, res, next) => {
  const noteId = req.params.nid;

  let note;
  try {
    note = await Note.findById(noteId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a note.',
      500
    );
    return next(error);
  }

  if (!note) {
    const error = new HttpError(
      'Could not find note for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ note: note.toObject({ getters: true }) });
};

const getNotesByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  let userWithNotes;
  try {
    userWithNotes = await User.findById(userId).populate('notes');
  } catch (err) {
    const error = new HttpError(
      'Fetching notes failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!userWithNotes || userWithNotes.notes.length === 0) {
    return next(
      new HttpError('Could not find notes for the provided user id.', 404)
    );
  }

  res.json({ notes: userWithNotes.notes.map(note => note.toObject({ getters: true })) });
};

const createNote = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { id, task, completed, creator } = req.body;


  const createdNote = new Note({
    id,
    task,
    completed,
    creator
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError(
      'Creating note failed, please try again.',
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id.', 404);
    return next(error);
  }

  console.log(user);

  try {
    const sess = await mongoose.startSession();
    console.log("Start session done")
    sess.startTransaction();
    console.log("Start transaction done")
    await createdNote.save({ session: sess }); 
    console.log("Created note done")
    user.notes.push(createdNote); 
    console.log("notes.push done")
    await user.save({ session: sess }); 
    console.log("Save user done")
    await sess.commitTransaction();
    console.log("Commit transaction done")
  } catch (err) {
    const error = new HttpError(
      'Creating note failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ note: createdNote });
};

const updateNote = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { completed } = req.body;
  const noteId = req.params.nid;

  let note;
  try {
    note = await Note.findById(noteId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update note because of _id',
      500
    );
    return next(error);
  }


  try {
    note.completed = await completed;
  } catch (err) {
    console.log(err)
  }

  try {
    await note.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update note.',
      500
    );
    return next(error);
  }
    res.status(200).json({ note: note.toObject({ getters: true }) });
};

const deleteNote = async (req, res, next) => {
  const noteId = req.params.nid;

  let note;
  try {
    note = await Note.findById(noteId).populate('creator');
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete note.',
      500
    );
    return next(error);
  }

  if (!note) {
    const error = new HttpError('Could not find note for this id.', 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await note.remove({session: sess});
    note.creator.notes.pull(note);
    await note.creator.save({session: sess});
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete note.',
      500
    );
    return next(error);
  }
  
  res.status(200).json({ message: 'Deleted note.' });
};

exports.getNoteById = getNoteById;
exports.getNotesByUserId = getNotesByUserId;
exports.createNote = createNote;
exports.updateNote = updateNote;
exports.deleteNote = deleteNote;
