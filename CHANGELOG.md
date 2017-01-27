# Change Log
All notable changes to this project will be documented in this file.

## [3.0.0] - 2017-02-16
### Added
- Custom greeting via `--greeting:hola` (defaults to `hello`)

### BREAKING changes
- All arguments now in --<option>:<value> format

## [2.0.0] - 2017-02-02
### Added
- Greeting now uses cowsay to add fancy cow graphic

### BREAKING changes
- Default greeting uses cowsay. To get plain text greeting you must
supply `--plain` flag.

- Initial release, greats by name with default of "stranger"

## [1.0.0] - 2017-01-26
### Added
- Initial release, greats by name with default of "stranger"