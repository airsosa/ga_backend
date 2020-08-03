'use strict';

const router = require('express').Router();
let Content = require('../models/content');


router.route('/create').post(async (req, res) => {

  console.log('data received');
  //console.log(req.body);
  const newContent = new Content ({
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.body,
    type: req.body.type,
    image: req.body.image,
  });
  
  await newContent.save()
  .then(()=> res.status(200).json({"success" : true, "message" : "content added"}))
  .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;