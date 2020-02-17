var express = require('express')
var router = express.Router()

const unizendLocalbtc = require('../middlewares/unizend-localbtc')

// console.log(unizendLocalbtc)

/**
 * GET home page.
 * 
 * @uses unizendLocalbtc.getData
 */
router.get('/', unizendLocalbtc.getData, (req, res) => {
  res.render('index', req.unizendLocalbtc)
})

module.exports = router