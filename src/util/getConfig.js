const countries = require('i18n-iso-countries'),
    validator = require('validator');

const getConfig = countryName => {

    let query = '';
    if (countryName === 'Worldwide') {
        query = 'brief/timeseries';
    }
    else {
        if (validator.isISO31661Alpha2(countryName) || validator.isISO31661Alpha3(countryName) || validator.isISO8601(countryName)) {
            query = `timeseries?iso=${countryName}`;
        }
        else {
            query = `timeseries?iso=${countries.getAlpha2Code(countryName, 'en')}`
        }
    }

    return {
        url: `https://covid-19-report-api.now.sh/api/v1/cases/${query}`,
        json: true
    };
};

module.exports = getConfig;