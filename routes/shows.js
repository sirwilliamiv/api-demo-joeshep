'use strict';

const { Router } = require('express');
const router = Router();

const { getShows, getShow, getShowFaves, addShow, deleteShow, getShowDirectors, getAllDirectors, getAllforDirector } = require('../controllers/showCtrl');

router.get('/shows', getShows);
router.post('/shows/new', addShow);
router.get('/shows/favorites', getShowFaves);
router.get('/shows/directors', getShowDirectors);
router.get('/shows/directors/all', getAllDirectors);
router.get('/shows/directors/director/:director', getAllforDirector);
router.get('/shows/:id', getShow);
router.delete('/shows/:id', deleteShow);
//add route for all directors
//add route for certain director to get all shows

module.exports = router;
