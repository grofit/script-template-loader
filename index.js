var loaderUtils = require('loader-utils');
var path = require("path");

module.exports = function (str) {
    if (this.cacheable) {
        this.cacheable();
    }

    var query = loaderUtils.parseQuery(this.query);
    var templateName = query.templateName || path.basename(this.resourcePath, '.html');
    var addToDom = query.addToDom || false;

    var out = [str];
    out.push("var scriptElement = document.createElement('script');");
    out.push("scriptElement.setAttribute('id', '" + templateName +"');");
    out.push("scriptElement.setAttribute('type', 'text/html');");
    out.push('scriptElement.text = module.exports;');
    out.push('module.exports = scriptElement;');

    if(addToDom) {
        out.push('document.body.appendChild(module.exports);');
    }

    return out.join('\n');
};