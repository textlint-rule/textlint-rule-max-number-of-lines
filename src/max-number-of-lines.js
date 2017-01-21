// LICENSE : MIT
"use strict";
const ObjectAssign = require("object-assign");
const defaultOptions = {max: 300};
module.exports = function(context, options = defaultOptions) {
    options = ObjectAssign({}, defaultOptions, options);
    const max = options.max;
    const {Syntax, RuleError, report, getSource} = context;
    return {
        [Syntax.Document](node) {
            const text = getSource(node);
            const len = text.split("\n").length;
            if (len > max) {
                report(node, new RuleError(`Document is too long(number of lines: ${len}).`));
            }
        }
    }
};