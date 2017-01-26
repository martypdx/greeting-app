Greeting App
===

A wonderful command line utility for having a cow greet people!

## Use

Cowsay usage:

```
> node ./lib/greet.js martha
 ______________
< hello martha >
 --------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

Greeting can still be done in plain text using the `--plain` flag:
```
> node ./lib/greet.js martha --plain
hello martha
```

## Contributing

### Getting Started

1. clone this repository
2. install and run tests:
```
greeting-app> npm install
...
greeting-app> npm test
...
```

### Project Organziation

* `cli` hosts the cli runner
* `lib` main functionality
* `test` unit and integration tests

### Coding Style

Coding style enforced via `.eslintrc`, view for details.

Highlights:

* Identation is 4 spaces
* Use single quotes for strings
* Use semicolons

