const express = require('express');

const router = express.Router();

const Appointments = require('../models/Appointments');

router.post('/', (req, res, next) => {
  const appointment = new Appointments({
    id: req.body.id,
    title: req.body.title,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    rRule: req.body.rRule,
    exDate: req.body.exDate,
    allDay: req.body.allDay,
  });

  appointment
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/', (req, res, next) => {
  Appointments.find()
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.patch('/', (req, res, next) => {
  let newObject = req.body.newObject;
  Appointments.findOneAndUpdate(req.body._id, newObject)
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete('/', (req, res, next) => {
  Appointments.deleteOne({ id: req.body.id })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
