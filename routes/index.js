var express = require('express')
var router = express.Router()

const unizendLocalbtc = require('../middlewares/unizend-localbtc')

/**
 * GET home page.
 * 
 * @uses unizendLocalbtc.getData
 */
router.get('/', unizendLocalbtc.getData, (req, res) => {
  res.render('index', req.unizendLocalbtcData)
})

module.exports = router