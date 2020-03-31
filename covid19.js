const program = require('commander'),
    request = require('request'),
    Table = require('cli-table3'),
    ervy = require('ervy'),
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

        let dateTime = new Date(Date.now());
        dateTime.setDate(dateTime.getDate() - 1);
        const date = ((dateTime.getMonth() + 1) + '/' + dateTime.getDate() + '/' + dateTime.getFullYear().toString().substr(2, 2)).toString();

        const configuration = {
            url: `https://covid-19-report-api.now.sh/api/v1/cases/brief/timeseries`,
            json: true
        };

        request(configuration, (error, response) => {
            console.log('\n');
            
            if (error) {
                console.error(chalk.bold.red('Unable to connect :('));
                return spinner.stop();
            }

            const data = response.body.data;
            console.log(data)

            const { 
                    confirmed,
                    deaths,
                    recovered 
                } = data[date],
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

            const { scatter } = ervy;

            spinner.stop();
            cursor.show();
        });
    })

program.parse(process.argv);
