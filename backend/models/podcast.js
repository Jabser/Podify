const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Podcast = new Schema({
  podcast_name: {
    type: String
  },
  podcast_test: {
    type: String
  }
});

module.exports = mongoose.model('Podcast', Podcast);