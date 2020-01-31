var express = require('express');
var router = express.Router();

const unizendLocalbtcPJson = require('unizend-localbtc/package.json')

console.log(unizendLocalbtcPJson)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: unizendLocalbtcPJson.name,
    description: unizendLocalbtcPJson.description,
    keywords: unizendLocalbtcPJson.keywords.toString(),
    author: unizendLocalbtcPJson.author,
    package: {
      title: unizendLocalbtcPJson.name + ' npm Package',
      url: 'https://npmjs.com/package' + unizendLocalbtcPJson._location
    },
    repo: {
      title: unizendLocalbtcPJson.name + ' GitHub Repository',
      url: unizendLocalbtcPJson.homepage
    },
    headings: {
      main: 'Unizend LocalBTC Documentation',
      secondary: unizendLocalbtcPJson.description
    },
    version: unizendLocalbtcPJson.version,
    license: {
      name: unizendLocalbtcPJson.license,
      url: 'https://github.com/Rincorpes/unizend-localbtc/blob/master/LICENSE'
    },
    issuesUrl: 'https://github.com/rincorpes/unizend-localbtc/issues'
  });
});

module.exports = router;
