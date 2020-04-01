const countries = require('i18n-iso-countries');

const getConfig = countryName => {

    let query = 'brief/timeseries';
    const configuration = {
        url: `https://covid-19-report-api.now.sh/api/v1/cases/${query}`,
        json: true
    };

    if (countryName === 'Worldwide') {
        return configuration;
    };

    const iso = countries.getAlpha2Code(countryName, 'en')
    console.log(iso);
    // let query = !country ? 'brief/timeseries' : 'timeseries?iso=DE';


    // let url = `https://covid-19-report-api.now.sh/api/v1/cases/${query}`;
    // return iso
};

// getConfig('India')

module.exports = getConfig;