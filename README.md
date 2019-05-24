weather-cli
===========

Just a simple test

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/weather-cli.svg)](https://npmjs.org/package/weather-cli)
[![Codecov](https://codecov.io/gh/m0ises2/weather-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/m0ises2/weather-cli)
[![Downloads/week](https://img.shields.io/npm/dw/weather-cli.svg)](https://npmjs.org/package/weather-cli)
[![License](https://img.shields.io/npm/l/weather-cli.svg)](https://github.com/m0ises2/weather-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g weather-cli
$ weather COMMAND
running command...
$ weather (-v|--version|version)
weather-cli/0.1.0 win32-x64 node-v10.15.1
$ weather --help [COMMAND]
USAGE
  $ weather COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`weather bye`](#weather-bye)
* [`weather hello`](#weather-hello)
* [`weather help [COMMAND]`](#weather-help-command)
* [`weather redis:clear`](#weather-redisclear)
* [`weather weather`](#weather-weather)

## `weather bye`

Describe the command here

```
USAGE
  $ weather bye

OPTIONS
  -l, --lastname=lastname  lastname to print
  -n, --name=name          name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src\commands\bye.js](https://github.com/m0ises2/weather-cli/blob/v0.1.0/src\commands\bye.js)_

## `weather hello`

Describe the command here

```
USAGE
  $ weather hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src\commands\hello.js](https://github.com/m0ises2/weather-cli/blob/v0.1.0/src\commands\hello.js)_

## `weather help [COMMAND]`

display help for weather

```
USAGE
  $ weather help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src\commands\help.ts)_

## `weather redis:clear`

Describe the command here

```
USAGE
  $ weather redis:clear

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src\commands\redis\clear.js](https://github.com/m0ises2/weather-cli/blob/v0.1.0/src\commands\redis\clear.js)_

## `weather weather`

Get weather for a given city

```
USAGE
  $ weather weather

OPTIONS
  -c, --city=city  (required) The city to look for the forecast
  --apiKey=apiKey  (required) apiKey need for weatherAPI

DESCRIPTION
  Extra documentation goes here
```

_See code: [src\commands\weather.js](https://github.com/m0ises2/weather-cli/blob/v0.1.0/src\commands\weather.js)_
<!-- commandsstop -->
