var express = require('express');
var router = express.Router();

const unizendLocalbtcPJson = require('unizend-localbtc/package.json')


/* GET docs listing. */
router.get('/', function(req, res, next) {
  res.redirect('/docs/getting-started/introduction');
});
/* GET docs listing. */
router.get('/getting-started', function(req, res, next) {
  res.redirect('/docs/getting-started/introduction');
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
/* GET docs listing. */
router.get('/api-reference', function(req, res, next) {
  res.redirect('/docs/api-reference/public-market-data');
});
/* GET docs listing. */
router.get('/api-reference/public-market-data', function(req, res, next) {
  res.render('docs/api-public-market-data', {
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
router.get('/api-reference/localbitcoins', function(req, res, next) {
  res.render('docs/api-localbitcoins', {
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
router.get('/api-reference/ads', function(req, res, next) {
  res.render('docs/api-ads', {
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
router.get('/api-reference/trades', function(req, res, next) {
  res.render('docs/api-trades', {
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
router.get('/api-reference/account', function(req, res, next) {
  res.render('docs/api-account', {
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
router.get('/api-reference/wallet', function(req, res, next) {
  res.render('docs/api-wallet', {
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
router.get('/about', function(req, res, next) {
  res.redirect('/docs/about/overview');
});
/* GET docs listing. */
router.get('/about/overview', function(req, res, next) {
  res.render('docs/about-overview', {
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
router.get('/about/team', function(req, res, next) {
  res.render('docs/about-team', {
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
