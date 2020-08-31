const assert = require("assert");

describe("file to be tested", () => {
  context("function to be tested", () => {
    it("1 should equal 1", () => {
      assert.strictEqual(1, 1);
    });
    it("the objects must be of same value", () => {
      assert.deepStrictEqual({ name: "steve" }, { name: "steve" });
    });
  });
});
