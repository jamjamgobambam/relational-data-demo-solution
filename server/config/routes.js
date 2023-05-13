const express = require('express')

// import SalonController from '../controllers/salon.js'
const SalonController = require('../controllers/salon')
const AppointmentsController = require('../controllers/appointments.js')
const HairStylesController = require('../controllers/hairstyles.js')
const HairStylistsController = require('../controllers/hairstylists.js')
const UsersController = require('../controllers/users.js')

const router = express.Router()

// salon - add route to get salon info
router.get('/salon', SalonController.getSalonInfo)


// appointments
router.get('/appointments', AppointmentsController.getAppointments)
router.get('/appointments/:id', AppointmentsController.getAppointmentsById)

// hair styles
router.get('/hairstyles', HairStylesController.getHairStyles)
router.get('/hairstyles/:id', HairStylesController.getHairStylesById)

// hair stylists
router.get('/hairstylists', HairStylistsController.getHairStylists)
router.get('/hairstylists/:id', HairStylistsController.getHairStylistById)

// users
router.get('/users', UsersController.getUsers)
router.get('/users/:id', UsersController.getUserById)

// users - add route to get user appointments


module.exports = router