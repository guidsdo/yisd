# Yarn Install in SubDirectories
Yarn Install in SubDirectories. Yes, it's that simple. Use it like: `yisd [subdirs...]` (Example: `yisd client server scripts`)

[Click here for the npm version!](https://github.com/guidojo/nisd)

## Example package.json
```json
{
  "name": "Root",
  "version": "0.0.1",
  "description": "mainFolder",
  "scripts": {
    "postinstall": "yisd client server"
  }
}
```

## Compatibility
Works on Linux and Mac, should also work on Windows (will test it soon). If not, create an issue and I will fix it. :-)
