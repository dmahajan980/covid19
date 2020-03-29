const program = require('commander'),
    {
        version,
        description
    } = require('./package.json');

program
    .version(version, '-v, --version', 'Display the current version of the program')
    .description(description);

program.parse(process.argv);