var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cool-thing', function(req, res, next) {
  res.render('cool-thing', { title: 'Cool Thing ~ Humble Abode' });
});

module.exports = router;