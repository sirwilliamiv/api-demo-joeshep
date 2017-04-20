'use strict'

const { Router } =require('express');
const router = Router();

router.use(require('./shows'));

router.get('/', function(req,res) {
  res.json({
    'shows':'https://api-demo-c17.herokuapp.com/api/v1/shows/',
    'favorites': 'https://api-demo-c17.herokuapp.com/api/v1/favorites?showId=<show_id>',
    'directors': 'https://api-demo-c17.herokuapp.com/api/v1/directors?showId=<show_id>'
  })
})
