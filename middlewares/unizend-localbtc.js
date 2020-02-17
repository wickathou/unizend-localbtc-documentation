const unizendLocalbtcPJson = require('unizend-localbtc/package.json')

const unizendLocalbtc = {}

unizendLocalbtc.setData = (req, res, next) => {
    console.log('Setting unizend-localbtc data into the express object')

    data = {
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
    }

    req.unizendLocalbtcData = data

    next()
}

module.exports = unizendLocalbtc