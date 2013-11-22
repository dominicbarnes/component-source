var exists = require("fs").existsSync;
var path = require("path");

exports = module.exports = function (dir, props) {
    dir = dir || process.cwd();
    props = props || exports.props;

    var source = [];
    var json = require(path.join(dir, "component.json"));

    props.forEach(function (prop) {
        if (prop in json && Array.isArray(json[prop])) {
            source = source.concat(json[prop]);
        }
    });

    return source;
};

exports.props = [ "scripts", "styles", "images", "fonts", "files" ];
