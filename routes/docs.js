var express = require('express');
var router = express.Router();

const unizendLocalbtcPJson = require('unizend-localbtc/package.json')


/* GET docs listing. */
router.get('/', function(req, res, next) {
  res.redirect('/docs/getting-started/introduction');
});
/* GET docs listing. */
router.get('/docs/getting-started', function(req, res, next) {
  res.redirect('/getting-started/introduction');
});
/* GET docs listing. */
router.get('/getting-started/introduction', function(req, res, next) {
  res.render('docs/getting-started-introduction', {
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
/* GET docs listing. */
router.get('/getting-started/installation', function(req, res, next) {
  res.render('docs/getting-started-installation', {
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
/* GET docs listing. */
router.get('/getting-started/usage', function(req, res, next) {
  res.render('docs/getting-started-usage', {
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
