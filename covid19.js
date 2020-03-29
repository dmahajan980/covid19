const program = require('commander'),
    request = require('request'),
    Table = require('cli-table3'),
    Spinner = require('cli-spinner').Spinner,
    cursor = require('cli-cursor'),
    chalk = require('chalk'),
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
    .action(() => {
        cursor.hide();
        let spinner = new Spinner(chalk.rgb(74, 177, 248)('%s'));
        spinner.setSpinnerString(18);
        spinner.start();

        const configuration = {
            url: 'https://covidapi.info/api/v1/global',
            json: true
        };

        request(configuration, (error, response) => {
            console.log('\n');
            
            if (error) {
                console.error(chalk.bold.red('Unable to connect :('));
                return spinner.stop();
            }

            const { 
                    confirmed,
                    deaths,
                    recovered 
                } = response.body.result,
                country = 'Worldwide';

            let table = new Table({
                head: [chalk.bold.hex('#8956ff')(country), chalk.bold.yellowBright('No of Cases')]
            });
            
            table.push(
                [ chalk.red.bold('Confirmed'), chalk.whiteBright.bold(confirmed) ],
                [ chalk.bold.blue('Deaths'), chalk.whiteBright.bold(deaths) ],
                [ chalk.bold.green('Recovered'), chalk.whiteBright.bold(recovered) ]
            );
            console.log(table.toString());

            spinner.stop();
            cursor.show();
        });
    })

program.parse(process.argv);
