var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

<<<<<<< HEAD
=======
router.get('/cool', function(req, res, next) {
  res.send("You're so cool!");
});

>>>>>>> a3b421b0c8249b35946c94a162dc62141a87bdef
module.exports = router;
