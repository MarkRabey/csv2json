# see-ess-vee-to-json

> Convert a `.csv` file to a `.json` file.

## Installation

```
npm i -g see-ess-vee-to-json
```

## Usage

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

### Examples

```shell
# Parse csv file and save as `output.json`
c2j /path-to/my-file.csv
```

```shell
# Specify saved file destination
c2j /path-to/my-file.csv --output /path-to/my-file.json
```
