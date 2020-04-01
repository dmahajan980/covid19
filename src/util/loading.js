const cursor = require('cli-cursor'),
    chalk = require('chalk'),
    Spinner = require('cli-spinner').Spinner;

const spinner = new Spinner(chalk.rgb(74, 177, 248)('%s'));
spinner.setSpinnerString(18);

const startLoader = () => {
    cursor.hide();
    spinner.start();
};

const hideLoader = () => {
    spinner.stop();
    cursor.show();
};

module.exports = {
    startLoader,
    hideLoader
};