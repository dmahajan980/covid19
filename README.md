# CoVID-19 CLI

![CoVID-19 CLI](./assets/banner.png)

[![NPM VERSION](http://img.shields.io/npm/v/covid-19.svg?style=flat&logo=npm)](https://www.npmjs.org/package/covid-19)
[![GitHub license](https://img.shields.io/github/license/dmahajan980/covid19.svg?style=flat&logo=github)](https://github.com/dmahajan980/covid19/blob/master/LICENSE)
[![npm collaborators](https://img.shields.io/npm/collaborators/covid-19.svg?logo=npm)](https://www.npmjs.com/package/covid-19)
[![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/covid-19.svg?color=9cf&logo=snyk)](https://www.npmjs.com/package/covid-19)
[![GitHub issues](https://img.shields.io/github/issues/dmahajan980/covid19.svg?logo=github)](https://www.npmjs.com/package/covid-19)

A command-line interface that enables the users to see CoVID-19 statistics on their terminal or command prompt. It provides the
flexibility to check global CoVID-19 statistics as well as statistics of a particular country or nation.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [License](#license)

## Installation

[![covid-19](http://img.shields.io/badge/npm-covid--19-red.svg?style=flat&logo=npm)](https://www.npmjs.com/package/covid-19)

The **CoVID-19 CLI** is available for free on [NPM](https://www.npmjs.com/package/covid-19).

```bash
npm install -g covid-19
```

The **CoVID-19 CLI** can also be installed using the source code on GitHub. Kindly follow the steps given below.

1. Clone or download the repository

   ```bash
   git clone https://github.com/dmahajan980/covid19.git
   ```

2. Install all the dependencies

   ```bash
   npm install
   ```

3. Add a symbolic link to the global folder

   - **Windows**  
     Open `cmd.exe` as Administrator and run the following command inside the root of the project directory

     ```bash
     npm link
     ```

   - **macOS/Linux**  
     Open the terminal and run the following command inside the root of the project directory

     ```bash
     sudo npm link
     ```

## Usage

This CLI is very easy to use.

### `covid19`

This is the name of the package that is used to invoke the CLI.  
 The following flag is supported.

|    Flag     | Alias |                Description                 |
| :---------: | :---: | :----------------------------------------: |
| `--version` | `-v`  | Display the current version of the program |

**Example:**

```bash
covid19 -v
```

```bash
covid19 --version
```

### `covid19 stats`

This command returns the statistics of CoVID-19 all over the world.

**Example:**

```bash
covid19 stats
```

The following flag is supported.

|           Flag            |       Alias        |                 Description                 |
| :-----------------------: | :----------------: | :-----------------------------------------: |
| `--country <countryName>` | `-c <countryName>` | Display statistics for a particular country |

The supported formats for `countryName` are ISO2, ISO3 or a single-word name.
<br/>
A list of ISO Country Codes can be <a href="https://www.iban.com/country-codes" target="_blank">found here</a>.

**Example:**

```bash
covid19 stats -c India
```

```bash
covid19 stats --country India
```

![example commands](assets/example.gif)

## Contributing

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/dmahajan980)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/dmahajan980/covid19/pulls)

Kindly go through the list of active [issues](https://github.com/dmahajan980/covid19/issues) or
open a [new issue](https://github.com/dmahajan980/covid19/issues/new) to discuss potential changes/additions.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](https://github.com/dmahajan980/covid19-cli/blob/master/LICENSE) file for details.
