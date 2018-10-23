var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: 'Name must be given'
  },
  color: {
    type: String,
    default: 'Blue'
  },
  username: {
    type: String,
    required: 'Username must be given'
  },
  password: {
    type: String,
    required: 'Password must be given'
  }
});

var Team = mongoose.model('Team', teamSchema);

module.exports = Team;