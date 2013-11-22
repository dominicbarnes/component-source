# component-source

List source files for a component. This was specifically designed for use in
Makefiles, but any other program that would consume such a list of files from
`stdout` could make use of this.

## Usage

### Command Line

```sh
$ component source --help

  Usage: component-source [options] [dir]

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -i, --include <list>  Include only the specified types (comma-separated)
    -e, --exclude <list>  Exclude the specified types (comma-separated)

  Examples:

    Only show scripts and stylesheets
    $ component source --include scripts,styles

    Exclude images, fonts and files
    $ component source --exclude images,fonts,files

    Examine a component directory other than pwd
    $ component source path/to/component/
```

### Programmatic Use

```js
var source = require("component-source");

// specify only a subset of properties
console.log(source("path/to/component", [ "scripts", "styles" ]));
```
