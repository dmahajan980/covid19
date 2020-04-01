const request = require('request'),
    chalk = require('chalk'),
    Table = require('cli-table3'),
    getDates = require('./util/getDates'),
    getConfig = require('./util/getConfig'),
    {
        hideLoader,
        startLoader
    } = require('./util/loading');

const getStats = country => {

    startLoader();

    const countryName = country ? country : 'Worldwide';
    const configuration = getConfig(countryName),
        {
            date,
            prevDate
        } = getDates();

    request(configuration, (error, response) => {
        console.log('\n');

        if (error) {
            console.error(chalk.bold.red('Unable to connect :('));
            hideLoader();
        }

        const data = response.body.data,
            latestDateAvailable = data[date] ? date : prevDate;

        const {
            confirmed,
            deaths,
            recovered
        } = data[latestDateAvailable],
            active = confirmed - deaths - recovered;

        let table = new Table({
            head: [chalk.bold.yellowBright(countryName), chalk.bold.yellowBright('No of Cases')]
        });

        table.push(
            [chalk.hex('#8956ff').bold('Confirmed'), chalk.whiteBright.bold(confirmed)],
            [chalk.bold.blue('Active'), chalk.whiteBright.bold(active)],
            [chalk.bold.red('Deaths'), chalk.whiteBright.bold(deaths)],
            [chalk.bold.green('Recovered'), chalk.whiteBright.bold(recovered)]
        );
        console.log(table.toString());

        hideLoader();
    });
};

module.exports = getStats;