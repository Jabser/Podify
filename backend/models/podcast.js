const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Podcast = new Schema({
  podcast_picture: {
    type: String
  },
  podcast_title: {
    type: String
  },
  podcast_description: {
    type: String
  },
  podcast_author: {
    type: String
  },
  podcast_itunes: {
    type: String
  },
  podcast_web: {
    type: String
  },
  podcast_play: {
    type: String
  },
  podcast_rating_like: {
    type: String
  },
  podcast_rating_dislike: {
    type: String
  }
});

module.exports = mongoose.model('Podcast', Podcast);