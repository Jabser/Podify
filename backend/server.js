const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const podcastRoutes = express.Router();
const PORT = 3020;

let Podcast = require('./models/podcast');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/podcasts', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
  console.log(' - MongoDB database connection established successfully!');
});

// *** Get all
// ******************************************************************************
podcastRoutes.route('/').get(function (req, res) {
  Podcast.find(function (err, podcasts) {
    if (err) {
      console.log(err);
    } else {
      res.json(podcasts);
    }
  });
});

// *** Get one by ID
// ******************************************************************************
podcastRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id;
  Podcast.findById(id, function (err, podcast) {
    res.json(podcast);
  });
});

// *** Post
// ******************************************************************************
podcastRoutes.route('/add').post(function (req, res) {
  let podcast = new Podcast(req.body);
  podcast.save()
    .then(podcast => {
      res.status(200).json({ 'podcast': 'Podcast added successfully' });
    })
    .catch(err => {
      res.status(400).send('Adding a new podcast failed');
    });
});

// *** Put
// ******************************************************************************
podcastRoutes.route('/update/:id').post(function (req, res) {
  Podcast.findById(req.params.id, function (err, podcast) {
    if (!podcast) 
      res.status(404).send('data is not found');
    else
      podcast.podcast_picture = req.body.podcast_picture;
      podcast.podcast_titel = req.body.podcast_titel;
      podcast.podcast_description = req.body.podcast_description;
      podcast.podcast_itunes = req.body.podcast_itunes;
      podcast.podcast_web = req.body.podcast_web;
      podcast.podcast_play = req.body.podcast_play;
      podcast.podcast_rating_like = req.body.podcast_rating_like;
      podcast.podcast_rating_dislike = req.body.podcast_rating_dislike;

      podcast.save().then(podcast => {
        res.json('Podcast updated');
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

// *** Delete
// ******************************************************************************
podcastRoutes.delete("/delete/:id", function (req, res) {
  Podcast.deleteOne({ _id: req.params.id }, function (err, result) {
    if (err) {
      console.log("fejl!");
    } else {
      var deleteAnswer = "Antal slettede Podcasts's:" + result.deletedCount
      res.json(deleteAnswer);
      console.log("Antal slettede: ", result.deletedCount);
    }
  }).catch(function () {
    console.log("Noget gik helt galt!");
  });
});

// *** Image upload
// ******************************************************************************




app.use('/podcasts', podcastRoutes);

app.listen(PORT, function () {
  console.log('Server is running on port: ' + PORT);
});