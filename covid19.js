#!/usr/bin/env node

const program = require('commander'),
    getStats = require('./src/getStats'),
    {
        version,
        description
    } = require('./package.json');

program
    .version(version, '-v, --version', 'Display the current version of the program')
    .description(description);

// Country
program
    .command('stats')
    .alias('s')
    .description('Returns the COVID-19 statistics')
    .usage('stats [options]')
    .option('-c, --country <countryName>', 'A particular country for which statistics are to be calculated')
    .action(({
        country
    }) => getStats(country));

program.parse(process.argv);
