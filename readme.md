# script-template-loader

A script template loader for webpack, primarily for use cases like knockout js 
where you want to include your templates and have them wrapped and embedded like:

```
<script id="your-template-name" type="text/html">
YOUR FILE CONTENT
</script>
```

You can output the DOM element or have it auto added to the DOM for you.

## Installation

```sh
npm install --save script-template-loader
```

Make sure you also have the [html-loader](https://www.npmjs.com/package/html-loader)
as this loader will require the html loader (or some loader to process HTML into a string).

## Options

* templateName (string): The name of the template (the id of the script tag) (default: <resource-filename>)
* addToDom (bool): Automatically add the template to the DOM when loaded (default: false)

## Example

Inline require without adding to DOM
```js
var domElement = require("script-template?templateName=foo!./template.html");
// Do something with DOM element
```

Inline require with DOM addition
```js
require("script-template?templateName=foo&addToDom=true!./template.html");
// element is automatically added to the document.body
```

Configuration
```js
module.exports = {
    module: {
        loaders: [
            { test: /\.html$/, loader: 'script-template?addToDom=true' }
        ]
    }
};

// This would automatically register all html files as templates with their filenames as the id
```

