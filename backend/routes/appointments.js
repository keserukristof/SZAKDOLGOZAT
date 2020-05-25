const express = require("express");
const { check } = require("express-validator");

const appointmentsControllers = require("../controllers/appointments-controller");

const router = express.Router();

router.get('/:aid', appointmentsControllers.getAppointmentById);

router.get("/user/:uid", appointmentsControllers.getAppointmentsByUserId);

router.post("/", appointmentsControllers.createAppointment);

router.patch("/:aid", appointmentsControllers.updateAppointment);

router.delete("/:aid", appointmentsControllers.deleteAppointment);

module.exports = router;
