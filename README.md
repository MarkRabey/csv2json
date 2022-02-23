# see-ess-vee-to-json

> Convert a `.csv` file to a `.json` file.

## Installation

```
npm i -g see-ess-vee-to-json
```

## Basic Usage

`Usage: c2j [command] [options]`

```
CLI to parse CSV files and output JSON

Options:
  -V, --version                   output the version number
  -h, --help                      display help for command

Commands:
  parse <path-to-file> [options]  Parse a file
  help [command]                  display help for command
```

### Parse

`Usage: c2j parse <path-to-file> [options]`

```
Parse a file

Arguments:
  path-to-file                path to the file to parse

Options:
  -o, --output <output-path>  path to output results to (default: "output.json")
  --object [key]              Group data as an object with optional key (default key: `data`)
  -h, --help                  display help for command
```

### Examples

```shell
# Parse csv file and save as `output.json`
c2j /path-to/my-file.csv
```

```shell
# Specify saved file destination
c2j /path-to/my-file.csv --output /path-to/my-file.json
```

In the above examples, your data will be output as an array of objects. Each object in the array contains one row from your input file.

#### `--object [key]`

The `--object` option wraps your data array in an object. When only the flag is passed, the key `data` is used:

```shell
# Wrap output in a object
c2j /path-to/my-file.csv --output /path-to/my-file.json --object
# Data output as: `{data: [...parsedRows]}`
```

When an optional `key` is included with the option, that key is used instead:

```shell
# Wrap output in a object with specified key
c2j /path-to/my-file.csv --output /path-to/my-file.json --object users
# Data output as: `{users: [...parsedRows]}`
```
