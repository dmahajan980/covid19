# CoVID-19 CLI

<img src="https://badges.frapsoft.com/os/v1/open-source.png?v=103"> <a href="LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/dmahajan980/covid19"></a>

A command-line interface to check the current statistics of COVID-19 of the world or a particular country.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [License](#license)

## Getting Started

Getting started with the CoVID-19 CLI is very simple. Kindly follow the steps given below.

1. Clone or download the repository using the command

   ```bash
   git clone https://github.com/dmahajan980/covid19.git
   ```

2. Install all the dependencies using the following command

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

Example:

```bash
covid19 -v
```

```bash
covid19 --version
```

### `covid19 stats`

This command returns the statistics of CoVID-19 all over the world.

Example:

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

Example:

```bash
covid19 stats -c India
```

```bash
covid19 stats --country India
```

![example commands](assets/example.gif)

## Contributing

Open an [issue](https://github.com/dmahajan980/covid19/issues) first to discuss potential changes/additions.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](https://github.com/dmahajan980/covid19-cli/blob/master/LICENSE) file for details.
