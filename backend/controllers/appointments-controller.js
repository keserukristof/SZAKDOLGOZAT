const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/HttpError");
const Appointments = require("../models/Appointments");
const User = require("../models/User");

const getAppointmentById = async (req, res, next) => {
  const appointmentId = req.params.aid;

  let appointment;
  try {
    appointment = await Appointments.findById(appointmentId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find an appointment.",
      500
    );
    return next(error);
  }

  if (!appointment) {
    const error = new HttpError(
      "Could not find appointment for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ appointment: appointment.toObject({ getters: true }) });
};

const getAppointmentsByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  let userWithAppointments;
  try {
    userWithAppointments = await User.findById(userId).populate('appointments');
  } catch (err) {
    const error = new HttpError(
      'Fetching appointments failed, please try again later.',
      500
    );
    console.log((err))
    return next(error);
  }

  if (!userWithAppointments || userWithAppointments.appointments.length === 0) {
    return next(
      new HttpError(
        "Could not find appointments for the provided user id.",
        404
      )
    );
  }

  res.json({
    appointments: userWithAppointments.appointments.map((appointment) =>
      appointment.toObject({ getters: true })
    ),
  });
};

const createAppointment = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const {
    id,
    title,
    startDate,
    endDate,
    rRule,
    notes,
    exDate,
    allDay,
    creator,
  } = req.body;

  const createdAppointment = new Appointments({
    id,
    title,
    startDate,
    endDate,
    rRule,
    notes,
    exDate,
    allDay,
    creator,
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError(
      "Creating appointment failed, please try again.",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided id.", 404);
    return next(error);
  }

  console.log(user);

  try {
    const sess = await mongoose.startSession();
    console.log("Start session done");
    sess.startTransaction();
    console.log("Start transaction done");
    console.log(createdAppointment)
    await createdAppointment.save({ session: sess });
    console.log("Created appointment saved");
    user.appointments.push(createdAppointment);
    console.log("appointments.push done");
    await user.save({ session: sess });
    console.log("Save user done");
    await sess.commitTransaction();
    console.log("Commit transaction done");
  } catch (err) {
    const error = new HttpError(
      "Creating appointment failed, please try again. 1",
      500
    );
    return next(error);
  }

  res.status(201).json({ appointment: createdAppointment });
};

const updateAppointment = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { completed } = req.body;
  const appointmentId = req.params.aid;

  let appointment;
  try {
    appointment = await Appointments.findById(appointmentId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update appointment.",
      500
    );
    return next(error);
  }

  try {
    appointment.completed = await completed;
  } catch (err) {
    console.log(err);
  }

  try {
    await appointment.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update appointment.",
      500
    );
    return next(error);
  }
  res
    .status(200)
    .json({ appointment: appointment.toObject({ getters: true }) });
};

const deleteAppointment = async (req, res, next) => {
  const appointmentId = req.params.aid;

  let appointment;
  try {
    appointment = await Appointments.findById(appointmentId).populate(
      "creator"
    );
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete appointment.",
      500
    );
    return next(error);
  }

  if (!appointment) {
    const error = new HttpError("Could not find appointment for this id.", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await appointment.remove({ session: sess });
    appointment.creator.appointments.pull(appointment);
    await appointment.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete appointment.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted appointment." });
};

exports.getAppointmentById = getAppointmentById;
exports.getAppointmentsByUserId = getAppointmentsByUserId;
exports.createAppointment = createAppointment;
exports.updateAppointment = updateAppointment;
exports.deleteAppointment = deleteAppointment;
