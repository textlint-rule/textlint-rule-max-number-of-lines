const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
const path = require("path");
const fs = require("fs");

// rule
const rule = require("../src/max-number-of-lines");
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // no problem
        "text"
    ],
    invalid: [
        // single match
        {
            text: fs.readFileSync(path.join(__dirname, "fixtures", "long.md"), "utf-8"),
            options: {
                max: 42
            },
            errors: [
                {
                    message: "Document is too long(number of lines: 50).",
                    line: 1,
                    column: 1
                }
            ]
        }
    ]
});