var express = require('express')
var router = express.Router()

const unizendLocalbtc = require('../middlewares/unizend-localbtc')

/**
 * GET home page.
 * 
 * @uses unizendLocalbtc.getData
 */
router.get('/', unizendLocalbtc.getData, (req, res) => {
  req.data.page = {
    title: req.data.unizendLocalbtc.title + ' | Wellcome to our docs',
    brand: req.data.unizendLocalbtc.title,
    headings: {
      main: 'Unizend LocalBTC Documentation',
      secondary: req.data.unizendLocalbtc.description
    },
    activeLinks: {
      page: 'home',
      section: null,
      item: null
    }
  }
  res.render('index', req.data)
})

module.exports = router