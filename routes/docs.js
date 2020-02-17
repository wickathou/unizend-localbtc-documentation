var express = require('express')
var router = express.Router()

const unizendLocalbtc = require('../middlewares/unizend-localbtc')

/**
 * Redirects from /docs to /docs/getting-started/introduction 
 */
router.get('/', (req, res) => {
  res.redirect('/docs/getting-started/introduction')
})

/**
 * Redirects from /docs/getting-started to /docs/getting-started/introduction
 */
router.get('/getting-started', (req, res) => {
  res.redirect('/docs/getting-started/introduction')
})

/**
 * Docs home page
 * 
 * @uses unizendLocalbtc.getData
 */
router.get('/getting-started/introduction', unizendLocalbtc.getData, (req, res) => {
  res.render('docs/getting-started-introduction', req.unizendLocalbtcData)
})
/* GET docs listing. */
router.get('/getting-started/installation', unizendLocalbtc.getData, (req, res, next) => {
  res.render('docs/getting-started-installation', req.unizendLocalbtcData)
})
/* GET docs listing. */
router.get('/getting-started/usage', unizendLocalbtc.getData, (req, res, next) => {
  res.render('docs/getting-started-usage', req.unizendLocalbtcData)
})
/* GET docs listing. */
router.get('/api-reference', unizendLocalbtc.getData, (req, res, next) => {
  res.redirect('/docs/api-reference/public-market-data')
})
/* GET docs listing. */
router.get('/api-reference/public-market-data', unizendLocalbtc.getData, (req, res, next) => {
  res.render('docs/api-public-market-data', req.unizendLocalbtcData)
})
/* GET docs listing. */
router.get('/api-reference/localbitcoins', unizendLocalbtc.getData, (req, res, next) => {
  res.render('docs/api-localbitcoins', req.unizendLocalbtcData)
})
/* GET docs listing. */
router.get('/api-reference/ads', unizendLocalbtc.getData, (req, res, next) => {
  res.render('docs/api-ads', req.unizendLocalbtcData)
})
/* GET docs listing. */
router.get('/api-reference/trades', unizendLocalbtc.getData, (req, res, next) => {
  res.render('docs/api-trades', req.unizendLocalbtcData)
})
/* GET docs listing. */
router.get('/api-reference/account', unizendLocalbtc.getData, (req, res, next) => {
  res.render('docs/api-account', req.unizendLocalbtcData)
})
/* GET docs listing. */
router.get('/api-reference/wallet', unizendLocalbtc.getData, (req, res, next) => {
  res.render('docs/api-wallet', req.unizendLocalbtcData)
})
/* GET docs listing. */
router.get('/about', unizendLocalbtc.getData, (req, res, next) => {
  res.redirect('/docs/about/overview')
})
/* GET docs listing. */
router.get('/about/overview', unizendLocalbtc.getData, (req, res, next) => {
  res.render('docs/about-overview', req.unizendLocalbtcData)
})
/* GET docs listing. */
router.get('/about/team', unizendLocalbtc.getData, (req, res, next) => {
  res.render('docs/about-team', req.unizendLocalbtcData)
})

module.exports = router
