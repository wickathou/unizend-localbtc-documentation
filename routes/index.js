var express = require('express')
var router = express.Router()

const unizendLocalbtcData = require('../middlewares/unizend-localbtc')

// console.log(unizendLocalbtcData)

/* GET home page. */
router.get('/', unizendLocalbtcData.setData, (req, res) => {
  res.render('index', req.unizendLocalbtcData)
})

module.exports = router