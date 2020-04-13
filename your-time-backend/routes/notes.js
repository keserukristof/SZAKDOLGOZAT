const express = require('express');

const router = express.Router();

const Notes = require('../models/Notes'); 

router.post('/', (req, res, next) => {
  const note = new Notes({
    id: req.body.id,
    task: req.body.task,
    completed: req.body.completed
  });

  note
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/', (req, res, next) => {
  Notes.find()
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.patch('/', (req, res, next) => {
  Notes.updateOne(
    { id: req.body.id },
    {
      $set: {
        completed: req.body.completed
      }
    }
  )
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete('/', (req, res, next) => {
  Notes.deleteOne({ id: req.body.id })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
