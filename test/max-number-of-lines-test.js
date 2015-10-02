import {textlint} from "textlint";
import rule from "../src/max-number-of-lines";
import path from "path";
import assert from "power-assert";
describe("max-number-of-lines", function () {
    afterEach(function () {
        textlint.resetRules();
    });
    context("when use default option", function () {
        beforeEach(function () {
            textlint.setupRules({
                "max-number-of-lines": rule
            }, {"max-number-of-lines": 42});
        });
        it("should report error", function () {
            var filePath = path.join(__dirname, "/fixtures/long.md");
            var result = textlint.lintFile(filePath);
            assert(result.filePath === filePath);
            assert(result.messages.length > 0);
            assert.equal(result.messages[0].ruleId, "max-number-of-lines");
        });
        it("should not report error", function () {
            var filePath = path.join(__dirname, "/fixtures/short.md");
            var result = textlint.lintFile(filePath);
            assert(result.filePath === filePath);
            assert(result.messages.length === 0);
        });
    });
});