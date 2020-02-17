const unizendLocalbtcPJson = require('unizend-localbtc/package.json')

const unizendLocalbtc = {}

unizendLocalbtc.getData = (req, res, next) => {
    console.log('Setting unizend-localbtc data into the express object')
    console.log(unizendLocalbtcPJson)

    let baseUrl = unizendLocalbtcPJson.author.url + unizendLocalbtcPJson._location

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
            url: baseUrl + '/blob/master/LICENSE'
        },
        issuesUrl: baseUrl + '/issues',
        contributorsUrl: baseUrl + '/graphs/contributors',
        codeOfConductUrl: baseUrl + '/blob/master/CODE-OF-CONDUCT.md',
        contributingUrl: baseUrl + '/blob/master/CONTRIBUTING.md'
    }

    req.unizendLocalbtcData = data

    next()
}

module.exports = unizendLocalbtc