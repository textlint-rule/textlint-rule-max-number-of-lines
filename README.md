# textlint-rule-max-number-of-lines

[textlint](https://github.com/azu/textlint "textlint") rule for linting number of lines.

## Installation

    npm install textlint-rule-max-number-of-lines

## Usage

    $ npm install textlint textlint-rule-max-number-of-lines
    $ textlint --rule textlint-rule-max-number-of-lines README.md
    # Document is too long(number of lines: 679).

## Configuration

Add config to `.textlintrc`

- `max` - default: 300

```json
{
  "rules": {
    "max-number-of-lines": {
        "max" : 300
    }
  }
}
```

## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
