# CoVID-19 CLI

<img src="https://badges.frapsoft.com/os/v1/open-source.png?v=103"> <a href="LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/dmahajan980/covid19"></a>

A command-line interface to check the current statistics of COVID-19 of the world or a particular country.

## Table of Contents

1.  [Getting Started](#getting-started)
2.  [Usage](#usage)
3.  [Contributing](#contributing")
4.  [License](#license)

## Getting Started

To get started with the CLI is very simple

1.  You can choose to clone or download this repository.  
    To clone this repository, the command is  

    ```bash
    git clone https://github.com/dmahajan980/covid19.git
    ```

2.   Now you need to install the dependencies. To do so, run the command
      ```bash
      npm install
      ```

3.   The last step is to add a symbolic link to the global folder.  
    If you are on Windows, start `cmd.exe` as Administrator and run the command
      ```bash
      npm link
      ```
      If you are on macOS/Linux, the command is
      ```bash
      sudo npm link
      ```

And we are ready to go!

## Usage

This CLI is very easy to use.

*   **covid19**  
    This is the name of the package that is used to invoke the CLI.  
    Flags are available for this command.  

    <table style="height: 5px; width: 600px;" border="black">

    <tbody>

    <tr style="border-color: black;">

    <td style="width: 150px; text-align: center; border-color: black;"><span style="text-decoration: underline;">flag</span></td>

    <td style="width: 150px; text-align: center; border-color: black;"><span style="text-decoration: underline;">alias</span></td>

    <td style="width: 300px; text-align: center;  border-color: black;"><span style="text-decoration: underline;">description</span></td>

    </tr>

    <tr>

    <td style="width: 150px; text-align: center; border-color: black;">--version</td>

    <td style="width: 150px; text-align: center; border-color: black;">-v</td>

    <td style="width: 300px; text-align: center; border-color: black;">Display the current version of the program</td>

    </tr>

    </tbody>

    </table>
    <br/>

    Example:
    ```bash
    covid19 -v
    ```
    OR
    ```bash
    covid19 --version
    ```

*   **covid19 stats**  
    This command returns the statistics of CoVID 19 all over the world.

    Example:
    ```bash
    covid19 stats
    ```

    Flags are available for this command.  

    <table style="height: 5px; width: 600px;" border="black">

    <tbody>

    <tr style="border-color: black;">

    <td style="width: 150px; text-align: center; border-color: black;"><span style="text-decoration: underline;">flag</span></td>

    <td style="width: 150px; text-align: center; border-color: black;"><span style="text-decoration: underline;">alias</span></td>

    <td style="width: 300px; text-align: center;  border-color: black;"><span style="text-decoration: underline;">description</span></td>

    </tr>

    <tr>

    <td style="width: 150px; text-align: center; border-color: black;">--country<br/> &ltcountryName&gt</td>

    <td style="width: 150px; text-align: center; border-color: black;">-c &ltcountryName&gt</td>

    <td style="width: 300px; text-align: center; border-color: black;">Display statistics for a particular country</td>

    </tr>

    </tbody>

    </table>
    <br/>
    The supported formats for countryName are ISO2, ISO3 or a single-word name.
    <br/>
    A list of ISO Country Codes can be <a href="https://www.iban.com/country-codes" target="_blank">found here</a>
    <br/><br/>

    Example:
    ```bash
    covid19 stats --country india
    ```
    OR
    ```bash
    covid19 stats --country US
    ```

![example commands](readme-assets/example.gif)

## Contributing

Open an [issue](https://github.com/dmahajan980/covid19/issues) first to discuss potential changes/additions.


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](https://github.com/dmahajan980/covid19-cli/blob/master/LICENSE) file for details.