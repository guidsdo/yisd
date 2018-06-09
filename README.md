# Yarn Install in SubDirectories
Yarn Install in SubDirectories. Yes, it's that simple. Use it like: `yisd [options] <directories...>` (Example: `yisd --async client server scripts`)

[Click here for the general version!](https://www.npmjs.com/package/eisd)

[Click here for the npm install version!](https://www.npmjs.com/package/nisd)

## Usage
```
  Usage: yisd [options] <directories...>

  Options:
    -a, --async        Execute yarn async across all folders, output will be a mess
    -e, --allowErrors  Allow errors (at default we stop when there is one). NOTE: always true when in async mode!
    -h, --help         output usage information
```

## Examples
Cli:
`yisd --async client server testSetup/mockServer`

Package.json:
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
Works on Linux, Mac and Windows. If not, create an issue and I will fix it. :-)
