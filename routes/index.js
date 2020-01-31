var express = require('express');
var router = express.Router();

const unizendLocalbtcPJson = require('unizend-localbtc/package.json')

// console.log(unizendLocalbtcPJson)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: unizendLocalbtcPJson.name,
    description: unizendLocalbtcPJson.description,
    keywords: unizendLocalbtcPJson.keywords.toString(),
    author: unizendLocalbtcPJson.author,
  });
});

module.exports = router;
