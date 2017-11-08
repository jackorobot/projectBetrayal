const express = require('express');
const router = express.Router();

var TeamRoutes = require('./team.routes');
var CellRoutes = require('./cell.routes');
var AuthenticateRoutes = require('./authenticate.routes');
var GameRoutes = require('./game.routes');

//Get API listing
router.get('/', (req, res) => {
  res.send('{ message : "API Works" }');
});

router.use('/teams', TeamRoutes);
router.use('/cells', CellRoutes);
router.use('/authenticate', AuthenticateRoutes);
router.use('/game', GameRoutes);

module.exports = router;